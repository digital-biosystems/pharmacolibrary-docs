<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;terodiline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Terodiline_Karln1982_reference&quot;,&quot;label&quot;:&quot;Karl\u00e9n_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_terodiline/Terodiline_Karln1982_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# terodiline

- **generic name:** terodiline
- **ATC codes:** `G04BD05`
- **DrugBank:** [DB13725](https://go.drugbank.com/drugs/DB13725) · **PubChem:** not captured
- **molar mass:** 281.443 g/mol (C20H27N) — DrugBank
- **groups:** experimental

## About

Terodiline is a calcium channel blocker and parasympatholytic drug classified for treating urinary frequency and incontinence. It is currently listed only as an experimental compound, and the available facts do not confirm any current approved use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7702989](https://www.wikidata.org/wiki/Q7702989) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| terodiline | parent | 281.443 | C20H27N | DrugBank | — | Hallén_1994, Karlén_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:12 | 0:53 | 0/0/2 | 2/0/0 | 0/0/0 | 28,828/3,391 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hallén_1994_reference](drugs/drug_terodiline/Terodiline_Halln1994_reference.md) | — | 1-compartment (no model) | 6 | Hallén B et al., Bioavailability and disposition of tero…, Journal of pharmaceutical s… (1994) | [10.1002/jps.2600830911](https://doi.org/10.1002/jps.2600830911) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Karlén_1982_reference](drugs/drug_terodiline/Terodiline_Karln1982_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Karlén B et al., Pharmacokinetics of terodiline in human…, European journal of clinica… (1982) | [10.1007/BF00547566](https://doi.org/10.1007/BF00547566) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Jones_1998_IKr](drugs/drug_terodiline/pd_Jones_1998_IKr.md) | IKr ← terodiline · direct sigmoid Emax (Hill) effect | — | Jones SE et al., Inhibition of the rapid component of th…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0702173](https://doi.org/10.1038/sj.bjp.0702173) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Jones_1998_IKs](drugs/drug_terodiline/pd_Jones_1998_IKs.md) | IKs ← terodiline · inhibition effect | — | Jones SE et al., Inhibition of the rapid component of th…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0702173](https://doi.org/10.1038/sj.bjp.0702173) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Webster_2001_MAPD](drugs/drug_terodiline/pd_Webster_2001_MAPD.md) | monophasic action potential duration ← terodiline · direct sigmoid Emax (Hill) effect | — | Webster R et al., Pharmacokinetic/pharmacodynamic assessm…, Xenobiotica; the fate of fo… (2001) | [10.1080/00498250110054632](https://doi.org/10.1080/00498250110054632) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=terodiline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hallén_1993.pdf` | Hallén B et al., Pharmacokinetics of R(+)-terodiline giv…, Pharmacology & toxicology (1993) | popPK | 10 | [10.1111/j.1600-0773.1993.tb01555.x](https://doi.org/10.1111/j.1600-0773.1993.tb01555.x) | [8265519](https://pubmed.ncbi.nlm.nih.gov/8265519) | The paper reports quantitative disposition parameters (clearance, volume, half-life, ka) for terodiline in humans with all numeric values explicitly provided in the text. |
| `Hallén_1994.pdf` | Hallén B et al., Bioavailability and disposition of tero…, Journal of pharmaceutical s… (1994) | popPK | 10 | [10.1002/jps.2600830911](https://doi.org/10.1002/jps.2600830911) | [7830238](https://pubmed.ncbi.nlm.nih.gov/7830238) | The abstract provides clear quantitative PK parameters for terodiline including clearance, volume of distribution, half-life, and absorption details in human subjects. |
| `Karlén_1982.pdf` | Karlén B et al., Pharmacokinetics of terodiline in human…, European journal of clinica… (1982) | popPK | 10 | [10.1007/BF00547566](https://doi.org/10.1007/BF00547566) | [7173296](https://pubmed.ncbi.nlm.nih.gov/7173296) | The paper reports quantitative pharmacokinetic parameters for terodiline in humans, including clearance, volume of distribution, half-lives, and bioavailability. |
| `Hartigan-Go_1996.pdf` | Hartigan-Go K et al., Stereoselective cardiotoxic effects of…, Clinical pharmacology and t… (1996) | pgx | 8 | [10.1016/S0009-9236(96)90171-X](https://doi.org/10.1016/S0009-9236(96)90171-X) | [8689817](https://www.ncbi.nlm.nih.gov/pubmed/8689817) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Ford_2000.pdf` | Ford GA et al., CYP2D6 and CYP2C19 genotypes of patient…, British journal of clinical… (2000) | pgx | 5 | [10.1046/j.1365-2125.2000.00230.x](https://doi.org/10.1046/j.1365-2125.2000.00230.x) | [10886124](https://www.ncbi.nlm.nih.gov/pubmed/10886124) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-07T09:11:32.715971+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ford_2000 | not_relevant | 5 | 3 | The paper reports genotype frequencies associated with cardiotoxicity (safety) but does not provide quantitative data on how CYP2D6/CYP2C19 genotypes alter PK parameters like Cmax, AUC, or half-life of terodiline. |
| PGx | Hartigan-Go_1996 | not_relevant | 0 | 0 | The study reports that CYP2D6 poor metabolizer status did not significantly delay the elimination of terodiline, indicating no observed pharmacogenomic effect on the PK parameter. |
| popPK | Jones_1998 | irrelevant | 0 | 0 | The study reports in-vitro electrophysiological mechanisms (IC50 for K+ current inhibition) in guinea-pigs, not pharmacokinetic disposition parameters. |
| popPK | Webster_2001 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic assessment (MAPD/QT effects) and reports ED50 values, but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) for terodiline. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:11 UTC</sub>
