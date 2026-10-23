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

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 1.28 | L/h | 1.28 liters/h | healthy subjects | 75 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bulitta_2013_reference](drugs/drug_fusidic_acid/FusidicAcid_Bulitta2013_reference.md) |
| CL | CL | 2 | L/h | 2.0 l/h | healthy female volunteers | 10 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Munkholm_1994_reference](drugs/drug_fusidic_acid/FusidicAcid_Munkholm1994_reference.md) |
| F | Fab | 0.18 |  | 18 % | healthy subjects | 75 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Bulitta_2013_reference](drugs/drug_fusidic_acid/FusidicAcid_Bulitta2013_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Bulitta_2013 · CL</text><circle cx="227.5" cy="30.0" r="4" fill="#ef6c00"><title>Bulitta_2013 · CL: 1.28 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Munkholm_1994 · CL</text><circle cx="295.4" cy="46.0" r="4" fill="#ef6c00"><title>Munkholm_1994 · CL: 2 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Bulitta_2013_reference](drugs/drug_fusidic_acid/FusidicAcid_Bulitta2013_reference.md) | — | 1-compartment (no model) | 2 | Bulitta JB et al., Population pharmacokinetics of fusidic…, Antimicrobial agents and ch… (2013) | [10.1128/AAC.01354-12](https://doi.org/10.1128/AAC.01354-12) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Munkholm_1994_reference](drugs/drug_fusidic_acid/FusidicAcid_Munkholm1994_reference.md) | — | 1-compartment (no model) | 3 | Munkholm P et al., Antibiotic activity in serum following…, European journal of drug me… (1994) | [10.1007/BF03188860](https://doi.org/10.1007/BF03188860) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brosche_2010_protein_biosynthesis_activity](drugs/drug_fusidic_acid/pd_Brosche_2010_protein_biosynthesis_activity.md) | protein biosynthesis activity ← fusidic acid · inhibition effect | — | Brosche S et al., Toxicity of five protein synthesis inhi…, Aquatic toxicology (Amsterd… (2010) | [10.1016/j.aquatox.2010.06.008](https://doi.org/10.1016/j.aquatox.2010.06.008) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zwiers_2011_TOF_ratio](drugs/drug_fusidic_acid/pd_Zwiers_2011_TOF_ratio.md) | train-of-four (TOF) ratio ← fusidic acid · inhibition effect | — | Zwiers A et al., Assessment of the potential for displac…, Clinical drug investigation (2011) | [10.2165/11584730-000000000-00000](https://doi.org/10.2165/11584730-000000000-00000) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Phee_2019_cfu](drugs/drug_fusidic_acid/pd_Phee_2019_cfu.md) | A. baumannii cfu ← fusidic acid · direct sigmoid Emax (Hill) effect | — | Phee LM et al., Pharmacokinetic-pharmacodynamic modelli…, The Journal of antimicrobia… (2019) | [10.1093/jac/dky524](https://doi.org/10.1093/jac/dky524) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fusidic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCC2` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| distribution | testis | `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inhibitor, `ABCG2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:08 | 2:53 | 2/0/0 | 3/0/0 | 0/0/0 | 66,840/16,073 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bulitta_2013.pdf` | Bulitta JB et al., Population pharmacokinetics of fusidic…, Antimicrobial agents and ch… (2013) | popPK | 10 | [10.1128/AAC.01354-12](https://doi.org/10.1128/AAC.01354-12) | [23147726](https://pubmed.ncbi.nlm.nih.gov/23147726) | The human population-PK model reports numeric clearance and autoinhibition parameters in the evidence. |
| `Knippenberg_2016.pdf` | Knippenberg B et al., Validation and Application of a Dried B…, Antimicrobial agents and ch… (2016) | popPK | 9 | [10.1128/AAC.00756-16](https://doi.org/10.1128/AAC.00756-16) | [27270283](https://pubmed.ncbi.nlm.nih.gov/27270283) | Population-PK estimates are reported, but their numeric values are not present in the evidence. |
| `Munkholm_1994.pdf` | Munkholm P et al., Antibiotic activity in serum following…, European journal of drug me… (1994) | popPK | 9 | [10.1007/BF03188860](https://doi.org/10.1007/BF03188860) | [7737235](https://pubmed.ncbi.nlm.nih.gov/7737235) | Human study reports numeric clearance and terminal half-life for fusidic-acid-equivalent activity. |

<sub>queue written 2026-10-07 22:05 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfusidic_acid%5D&body=Drug%3A%20fusidic_acid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fusidic_acid/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 22:05 UTC</sub>
