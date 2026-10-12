<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;zopiclone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zopiclone_Han2025_reference&quot;,&quot;label&quot;:&quot;Han_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zopiclone/Zopiclone_Han2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zopiclone_Luurila1996_reference&quot;,&quot;label&quot;:&quot;Luurila_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zopiclone/Zopiclone_Luurila1996_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# zopiclone

- **generic name:** zopiclone
- **ATC codes:** `N05CF01`
- **DrugBank:** [DB01198](https://go.drugbank.com/drugs/DB01198) · **PubChem:** [CID 5735](https://pubchem.ncbi.nlm.nih.gov/compound/5735)
- **molar mass:** 388.808 g/mol (C17H17ClN6O3) — DrugBank
- **groups:** approved

## About

Zopiclone is a hypnotic and sedative medicine used to treat sleep disorders such as insomnia. It is an approved drug, widely used as a short-term sleeping aid in many countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q220426](https://www.wikidata.org/wiki/Q220426) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zopiclone | parent | 388.808 | C17H17ClN6O3 | DrugBank | [5735](https://pubchem.ncbi.nlm.nih.gov/compound/5735) | Luurila_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:15 | 0:47 | 1/0/1 | 2/0/1 | 0/0/0 | 48,582/3,454 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span> | [Han_2025_reference](drugs/drug_zopiclone/Zopiclone_Han2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Han HH et al., Population pharmacokinetics modelling t…, Frontiers in psychiatry (2025) | [10.3389/fpsyt.2025.1664678](https://doi.org/10.3389/fpsyt.2025.1664678) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Luurila_1996_reference](drugs/drug_zopiclone/Zopiclone_Luurila1996_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Luurila_1996_DSST](drugs/drug_zopiclone/pd_Luurila_1996_DSST.md) | digit symbol substitution test ← zopiclone · inhibition effect | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luurila_1996_DSST_2](drugs/drug_zopiclone/pd_Luurila_1996_DSST_2.md) | digit symbol substitution test ← zopiclone · delayed effect through an effect compartment | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luurila_1996_SPV](drugs/drug_zopiclone/pd_Luurila_1996_SPV.md) | saccadic peak velocity ← zopiclone · inhibition effect | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Luurila_1996_SPV_2](drugs/drug_zopiclone/pd_Luurila_1996_SPV_2.md) | saccadic peak velocity ← zopiclone · delayed effect through an effect compartment | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Munakata_1996_GABA_response_potentiation_by_zopiclone](drugs/drug_zopiclone/pd_Munakata_1996_GABA_response_potentiation_by_zopiclone.md) | GABA response potentiation by zopiclone ← zopiclone · direct Emax (saturable) effect | — | Munakata M et al., Heterogeneous distribution of benzodiaz…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15473.x](https://doi.org/10.1111/j.1476-5381.1996.tb15473.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lloyd_1990_35S_TBPS_binding](drugs/drug_zopiclone/pd_Lloyd_1990_35S_TBPS_binding.md) | 35S-TBPS binding to rat cerebral cortex membranes ← zopiclone · direct Emax (saturable) effect | model (no simulator) | Lloyd GK et al., The activity of zolpidem and other hypn…, The Journal of pharmacology… (1990) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luurila_1996.pdf` | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | popPK | 10 | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) | [8737972](https://pubmed.ncbi.nlm.nih.gov/8737972) | Human PK-PD study of zopiclone with explicit numeric CL, V, and half-life values in the abstract. |
| `Gaillot_1982.pdf` | Gaillot J et al., Pharmacokinetics and metabolism of zopi…, International pharmacopsych… (1982) | popPK | 9 | not captured | [7188377](https://pubmed.ncbi.nlm.nih.gov/7188377) | Original PK study of zopiclone with quantitative parameters (t½ 4–5 h, CL 300 ml/min, renal clearance 10 ml/min, bioavailability, protein binding) reported directly in the abstract. |
| `Gaillot_1983.pdf` | Gaillot J et al., Pharmacokinetics and metabolism of zopi…, Pharmacology 27 Suppl (1983) | popPK | 9 | [10.1159/000137914](https://doi.org/10.1159/000137914) | [6669634](https://pubmed.ncbi.nlm.nih.gov/6669634) | Original PK study of zopiclone with numeric parameters (t½ 4–5 h, CL 300 ml/min, bioavailability, protein binding) directly in the abstract. |

<sub>queue written 2026-10-06T23:14:44.837069+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dresser_2000 | irrelevant | 1 | 0 | Review of CYP3A4 interactions mentioning zopiclone only qualitatively, with no PK parameter values. |
| popPK | Gex-Fabry_2004 | irrelevant | 0 | 0 | Zopiclone is only mentioned as allowed comedication; the study concerns venlafaxine pharmacodynamics, with no zopiclone PK parameters. |
| popPK | Han_2025 | irrelevant | 2 | 3 | Zopiclone is only a covariate/DDI perpetrator in a clozapine PPK model; no zopiclone PK parameters of its own are reported (Ka 1.3/h is clozapine's, fixed from literature). |
| popPK | Lloyd_1990 | irrelevant | 0 | 0 | In-vitro receptor binding study with no pharmacokinetic disposition parameters for zopiclone. |
| popPK | Munakata_1996 | irrelevant | 0 | 0 | In-vitro electrophysiology study of benzodiazepine receptor pharmacology in rat neurons, with no PK parameters for zopiclone. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | In-vitro receptor reporter study of enantiopure drugs; no PK parameters for zopiclone. |
| popPK | Petroski_2006 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of indiplon's GABA(A) receptor selectivity; zopiclone is only mentioned as a potency comparator, with no PK parameters. |
| popPK | Reynolds_1996 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptors; zopiclone is not a PK subject and no disposition parameters are reported. |
| popPK | Sanger_1985 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters or numeric disposition values for zopiclone. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:14 UTC</sub>
