<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;fusidic acid&quot;}]"></div>

# fusidic acid

- **generic name:** fusidic acid
- **ATC codes:** `D06AX01`, `D09AA02`, `J01XC01`, `S01AA13`
- **DrugBank:** [DB02703](https://go.drugbank.com/drugs/DB02703) · **PubChem:** [CID 3000226](https://pubchem.ncbi.nlm.nih.gov/compound/3000226)
- **molar mass:** 516.7092 g/mol (C31H48O6) — DrugBank
- **groups:** approved, investigational

## About

Fusidic acid is an antibiotic that inhibits bacterial protein synthesis and is used to treat bacterial skin, eye, and other infections. It is an approved medicine, available in topical skin preparations, medicated dressings, eye drops, and systemic formulations, and is used widely in many countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q259930](https://www.wikidata.org/wiki/Q259930) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fusidic acid (fusidic_acid) | parent | 516.709 | C31H48O6 | DrugBank | [3000226](https://pubchem.ncbi.nlm.nih.gov/compound/3000226) | Bulitta_2013, Munkholm_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:08 | 2:53 | 0/0/2 | 2/0/1 | 0/0/0 | 66,840/16,073 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bulitta_2013_reference](drugs/drug_fusidic_acid/FusidicAcid_Bulitta2013_reference.md) | — | 1-compartment (no model) | 2 | Bulitta JB et al., Population pharmacokinetics of fusidic…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.01354-12](https://doi.org/10.1128/AAC.01354-12) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Munkholm_1994_reference](drugs/drug_fusidic_acid/FusidicAcid_Munkholm1994_reference.md) | — | 1-compartment (no model) | 3 | Munkholm P et al., Antibiotic activity in serum following…, European journal of drug me… (1994) | [10.1007/BF03188860](https://doi.org/10.1007/BF03188860) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brosche_2010_protein_biosynthesis_activity](drugs/drug_fusidic_acid/pd_Brosche_2010_protein_biosynthesis_activity.md) | protein biosynthesis activity ← fusidic acid · inhibition effect | — | Brosche S et al., Toxicity of five protein synthesis inhi…, Aquatic toxicology (Amsterd… (2010) | [10.1016/j.aquatox.2010.06.008](https://doi.org/10.1016/j.aquatox.2010.06.008) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Zwiers_2011_TOF_ratio](drugs/drug_fusidic_acid/pd_Zwiers_2011_TOF_ratio.md) | train-of-four (TOF) ratio ← fusidic acid · inhibition effect | — | Zwiers A et al., Assessment of the potential for displac…, Clinical drug investigation (2011) | [10.2165/11584730-000000000-00000](https://doi.org/10.2165/11584730-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Phee_2019_cfu](drugs/drug_fusidic_acid/pd_Phee_2019_cfu.md) | A. baumannii cfu ← fusidic acid · direct sigmoid Emax (Hill) effect | — | Phee LM et al., Pharmacokinetic-pharmacodynamic modelli…, The Journal of antimicrobia… (2019) | [10.1093/jac/dky524](https://doi.org/10.1093/jac/dky524) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fusidic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bulitta_2013.pdf` | Bulitta JB et al., Population pharmacokinetics of fusidic…, Antimicrobial agents and ch… (2013) | popPK | 10 | [10.1128/AAC.01354-12](https://doi.org/10.1128/AAC.01354-12) | [23147726](https://pubmed.ncbi.nlm.nih.gov/23147726) | The human population-PK model reports numeric clearance and autoinhibition parameters in the evidence. |
| `Knippenberg_2016.pdf` | Knippenberg B et al., Validation and Application of a Dried B…, Antimicrobial agents and ch… (2016) | popPK | 9 | [10.1128/AAC.00756-16](https://doi.org/10.1128/AAC.00756-16) | [27270283](https://pubmed.ncbi.nlm.nih.gov/27270283) | Population-PK estimates are reported, but their numeric values are not present in the evidence. |
| `Munkholm_1994.pdf` | Munkholm P et al., Antibiotic activity in serum following…, European journal of drug me… (1994) | popPK | 9 | [10.1007/BF03188860](https://doi.org/10.1007/BF03188860) | [7737235](https://pubmed.ncbi.nlm.nih.gov/7737235) | Human study reports numeric clearance and terminal half-life for fusidic-acid-equivalent activity. |

<sub>queue written 2026-10-07T22:05:38.159503+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brosche_2010 | irrelevant | 0 | 0 | This is an in-vitro bacterial toxicity study and reports no fusidic-acid pharmacokinetic parameters. |
| popPK | Chan_2015 | irrelevant | 1 | 0 | This human case report mentions fusidic acid’s half-life and plasma Cmax but provides no quantitative PK parameters. |
| popPK | Knippenberg_2016 | relevant | 9 | 0 | Population-PK estimates are reported, but their numeric values are not present in the evidence. |
| popPK | Lemaire_2008 | irrelevant | 0 | 0 | Fusidic acid is tested for antibacterial activity in vitro, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Marsot_2017 | irrelevant | 0 | 0 | The study models rifampicin, with fusidic acid only as a coadministration covariate; no fusidic acid PK values are reported. |
| popPK | Marsot_2020 | irrelevant | 0 | 0 | Fusidic acid is only coadministered; the model and PK parameters are for rifampicin. |
| popPK | Phee_2019 | irrelevant | 1 | 0 | This is an in vitro antibacterial PK/PD study, and no quantitative fusidic-acid disposition parameters are reported. |
| popPK | Sherertz_1993 | irrelevant | 0 | 0 | Quantitative half-lives are reported for other coating agents, but not for fusidic acid. |
| popPK | Tsuji_2011 | irrelevant | 1 | 0 | This is a review and provides no numeric fusidic-acid disposition parameters in the evidence. |
| popPK | Zwiers_2011 | irrelevant | 0 | 0 | Fusidic acid is only assessed as a potential sugammadex interaction, with no fusidic-acid disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:05 UTC</sub>
