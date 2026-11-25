<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tianeptine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intravenous_1_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intravenous_1_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tianeptine

- **generic name:** tianeptine
- **ATC codes:** `N06AX14`
- **DrugBank:** [DB09289](https://go.drugbank.com/drugs/DB09289) · **PubChem:** [CID 68870](https://pubchem.ncbi.nlm.nih.gov/compound/68870)
- **molar mass:** 436.952 g/mol (C21H25ClN2O4S) — DrugBank
- **groups:** investigational

## About

Tianeptine is an atypical tricyclic antidepressant used mainly for major depressive disorder and sometimes for anxiety or irritable bowel syndrome. It is given by mouth as tablets, which are well absorbed. It is approved in France and other parts of Europe and Asia, but not available in the United States, where it is an unregulated drug sometimes sold as a recreational substance.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q424260](https://www.wikidata.org/wiki/Q424260), [Wikipedia](https://en.wikipedia.org/wiki/Tianeptine?oldid=1385407725) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tianeptine | parent | 436.952 | C21H25ClN2O4S | DrugBank | [68870](https://pubchem.ncbi.nlm.nih.gov/compound/68870) | Szafarz_2018 |
| MC5 | metabolite | 408.897 | C19H21ClN2O4S | PubChem | [5487151](https://pubchem.ncbi.nlm.nih.gov/compound/5487151) | Szafarz_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: model_quarantined: Cl, ka, Tlag left at base-class defaults</sub> | [Szafarz_2018_intraperitoneal_10_mg_kg](drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.md) | held back | 1-compartment, oral | 7 | Szafarz M et al., Pharmacokinetic study of tianeptine and…, Naunyn-Schmiedeberg's archi… (2018) | [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ estimate](drugs/drug_tianeptine/Tianeptine_Szafarz2018_estimate.md) | — | parent + metabolite (no model) | 5 (+1 cov.) |  |  |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_t_half_beta</sub> | [↳ intravenous_1_mg_kg](drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md) | ▶ model + simulator | 1-compartment, oral | 8 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Grasela_1993_reference](drugs/drug_tianeptine/Tianeptine_Grasela1993_reference.md) | — | 1-compartment (no model) | 0 | Grasela TH et al., Development of a population pharmacokin…, European journal of clinica… (1993) | [10.1007/BF00315502](https://doi.org/10.1007/BF00315502) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_arr2](drugs/drug_tianeptine/pd_Vandeputte_2020_arr2.md) | MOR activation, β-arrestin 2 recruitment (normalized AUC to hydromorphone) ← tianeptine · direct sigmoid Emax (Hill) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_mini_Gi](drugs/drug_tianeptine/pd_Vandeputte_2020_mini_Gi.md) | MOR activation, mini-Gi recruitment (normalized AUC to hydromorphone) ← tianeptine · direct sigmoid Emax (Hill) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:42 | 0:04 | 1/3/0 | 2/0/0 | 0/0/0 | 3,453/155 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Royer_1989.pdf` | Royer RJ et al., Tianeptine and its main metabolite phar…, Clinical pharmacokinetics (1989) | popPK | 6 | [10.2165/00003088-198916030-00005](https://doi.org/10.2165/00003088-198916030-00005) | [2721088](https://pubmed.ncbi.nlm.nih.gov/2721088) | The study reports pharmacokinetics of tianeptine in humans using non-compartmental analysis, but the evidence only contains relative changes (percentages) and qualitative statements rather than absolute numeric values for CL, V, or half-life. |

<sub>queue written 2026-11-24 04:42 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdel-Razaq_2007 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of gene transcription and does not report any pharmacokinetic disposition parameters for tianeptine. |
| PGx | Abdel-Razaq_2007 | not_relevant | 0 | 0 | The study investigates the effects of tianeptine on gene transcription in a cell model but does not involve any genetic variants, genotypes, or pharmacogenomic factors influencing PK or PD. |
| popPK | García-Alberca_2022 | irrelevant | 0 | 0 | Clinical efficacy study of tianeptine in Alzheimer's depression; no PK parameters (CL, V, ka, half-life, or PK model) reported anywhere. |
| popPK | Gassaway_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and signaling, not a pharmacokinetic study. |
| PGx | Gassaway_2014 | not_relevant | 0 | 0 | The paper reports the mechanism of action of tianeptine as an opioid receptor agonist but does not investigate genetic variants or their impact on PK/PD parameters. |
| PGx | Grasela_1993 | not_relevant | 0 | 0 | The paper reports non-genetic covariates (alcoholism, gender, depression) affecting PK, but does not mention any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Grasela_1993_2 | irrelevant | 8 | 0 | The paper describes a population PK model for tianeptine but does not report the specific numeric parameter values (CL, V, etc.) in the provided evidence, only prediction error metrics. |
| PGx | Grasela_1993_2 | not_relevant | 0 | 0 | The paper evaluates population pharmacokinetic model predictions against post-marketing data but does not report any pharmacogenomic effects (gene variants) on PK parameters. |
| popPK | Jeon_2014 | irrelevant | 0 | 0 | The study is a clinical trial focusing on neurocognitive efficacy and does not report any pharmacokinetic parameters for tianeptine. |
| PGx | Jeon_2014 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing neurocognitive outcomes of tianeptine and escitalopram in MDD, but contains no pharmacogenomic data (gene variants) affecting PK or PD parameters. |
| popPK | Jung_2022 | irrelevant | 0 | 0 | Medicinal chemistry/SAR paper on tianeptine derivatives; no PK disposition parameters for tianeptine are reported. |
| popPK | Nowakowska_2000 | irrelevant | 0 | 0 | The paper reports behavioral effects (immobility, anxiolysis, memory) rather than quantitative pharmacokinetic disposition parameters. |
| PGx | Nowakowska_2000 | not_relevant | 0 | 0 | The paper investigates behavioral pharmacodynamics in rats but does not report any pharmacogenomic effects or associations with genetic variants. |
| popPK | Park_2025 | irrelevant | 0 | 0 | This is a tDCS clinical trial in depression; tianeptine appears only as a co-medication associated with adverse events, with no PK parameters reported. |
| popPK | Royer_1989 | relevant | 6 | 2 | The study reports pharmacokinetics of tianeptine in humans using non-compartmental analysis, but the evidence only contains relative changes (percentages) and qualitative statements rather than absolute numeric values for CL, V, or half-life. |
| PGx | Royer_1989 | not_relevant | 0 | 0 | The study investigates the effect of chronic alcoholism and cirrhosis (disease states) on pharmacokinetics, not a genetic variant or genotype. |
| popPK | Vandeputte_2020 | irrelevant | 0 | 0 | In vitro MOR activity study (EC50/Emax) of opioid NPS including tianeptine; no PK disposition parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btianeptine%5D&body=Drug%3A%20tianeptine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tianeptine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:41 UTC</sub>
