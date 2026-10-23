<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;toloxatone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Toloxatone_Vistelle1992_reference&quot;,&quot;label&quot;:&quot;Vistelle_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# toloxatone

- **generic name:** toloxatone
- **ATC codes:** `N06AG03`
- **DrugBank:** [DB09245](https://go.drugbank.com/drugs/DB09245) · **PubChem:** [CID 34521](https://pubchem.ncbi.nlm.nih.gov/compound/34521)
- **molar mass:** 207.229 g/mol (C11H13NO3) — DrugBank
- **groups:** experimental

## About

Toloxatone is a monoamine oxidase A inhibitor that has been used as an antidepressant. It is currently listed only as an experimental drug, suggesting it is not an established marketed medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3530618](https://www.wikidata.org/wiki/Q3530618) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| toloxatone | parent | 207.229 | C11H13NO3 | DrugBank | [34521](https://pubchem.ncbi.nlm.nih.gov/compound/34521) | Benedetti_1982 |

## Start here

> **Vistelle_1992_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> anaesthetized rabbits. [Run it in the simulator](drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md?tab=Simulation) · [record](drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 4.74 | L/h | 79 mL min-1 | anaesthetized rabbits | rabbit | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vistelle_1992_reference](drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md) |
| V | V | 5.8 | L | 5.8 L | anaesthetized rabbits | rabbit | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vistelle_1992_reference](drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md) |
| t½ | t1/2z | 0.79 | h | 47.4 min | anaesthetized rabbits | rabbit | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vistelle_1992_reference](drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>stale — current check: Not simulated</sub> | [Vistelle_1992_reference](drugs/drug_toloxatone/Toloxatone_Vistelle1992_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Vistelle R et al., Toloxatone pharmacokinetics in the plas…, The Journal of pharmacy and… (1992) | [10.1111/j.2042-7158.1992.tb03576.x](https://doi.org/10.1111/j.2042-7158.1992.tb03576.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Benedetti_1982_reference](drugs/drug_toloxatone/Toloxatone_Benedetti1982_reference.md) | — | 1-compartment (no model) | 1 | Benedetti MS et al., Pharmacokinetics of toloxatone in man f…, Arzneimittel-Forschung (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Dos_2026_MAO_A_IC50](drugs/drug_toloxatone/pd_Dos_2026_MAO_A_IC50.md) | MAO-A activity inhibition by toloxatone ← toloxatone · inhibition effect | — | Dos Reis VEN et al., Evaluation of novel selective MAO-B inh…, Journal of pharmaceutical a… (2026) | [10.1016/j.jpba.2025.117200](https://doi.org/10.1016/j.jpba.2025.117200) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rat</span> | [Dupont_1987_Inhibition_of_cytochrome_P_450_dependent_hydroxylation_O_deethylation_bufuralol_hydroxylation_antipyrine_hydroxylation_7_ethoxycoumarin_O_deethylation_in_rat_liver_microsomes](drugs/drug_toloxatone/pd_Dupont_1987_Inhibition_of_cytochrome_P_450_dependent_hydroxy.md) | Inhibition of cytochrome P-450 dependent hydroxylation/O-deethylation (bufuralol hydroxylation, antipyrine hydroxylation, 7-ethoxycoumarin O-deethylation) in rat liver microsomes ← toloxatone · inhibition effect | — | Dupont H et al., Inhibition of cytochrome P-450-dependen…, Biochemical pharmacology (1987) | [10.1016/0006-2952(87)90050-5](https://doi.org/10.1016/0006-2952(87)90050-5) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Zitova_2010_MAO](drugs/drug_toloxatone/pd_Zitova_2010_MAO.md) | MAO oxygen consumption inhibition by toloxatone ← toloxatone · inhibition effect | — | Zitova A et al., Analysis of activity and inhibition of…, Analytical biochemistry (2010) | [10.1016/j.ab.2009.10.029](https://doi.org/10.1016/j.ab.2009.10.029) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=toloxatone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOA` inhibitor/target, `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `MAOA` inhibitor/target | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor/target | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:52 | 1:59 | 1/1/0 | 3/0/0 | 0/0/0 | 53,089/2,660 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Benedetti_1982.pdf` | Benedetti MS et al., Pharmacokinetics of toloxatone in man f…, Arzneimittel-Forschung (1982) | popPK | 10 | not captured | [7200786](https://pubmed.ncbi.nlm.nih.gov/7200786) | Human PK study of toloxatone with numeric CL, Vd, t½, and bioavailability reported directly in the abstract. |
| `Vistelle_1992.pdf` | Vistelle R et al., Toloxatone pharmacokinetics in the plas…, The Journal of pharmacy and… (1992) | popPK | 10 | [10.1111/j.2042-7158.1992.tb03576.x](https://doi.org/10.1111/j.2042-7158.1992.tb03576.x) | [1352813](https://pubmed.ncbi.nlm.nih.gov/1352813) | Original PK study with numeric CL, V, and half-life for toloxatone reported directly in the abstract. |
| `Kaltenbach_1999.pdf` | Kaltenbach ML et al., Effect of acute ethanol administration…, Alcoholism, clinical and ex… (1999) | popPK | 7 | not captured | [10371410](https://pubmed.ncbi.nlm.nih.gov/10371410) | Rabbit PK study of toloxatone with half-lives reported, but no CL/V values given in the evidence. |
| `Baek_2019.pdf` | Baek SC et al., Rhamnocitrin isolated from Prunus padus…, Bioorganic chemistry (2019) | pd | 4 | [10.1016/j.bioorg.2018.10.051](https://doi.org/10.1016/j.bioorg.2018.10.051) | [30396116](https://www.ncbi.nlm.nih.gov/pubmed/30396116) | metadata signals extractable PD data (IC50) |
| `Dos_2026.pdf` | Dos Reis VEN et al., Evaluation of novel selective MAO-B inh…, Journal of pharmaceutical a… (2026) | pd | 4 | [10.1016/j.jpba.2025.117200](https://doi.org/10.1016/j.jpba.2025.117200) | [41108843](https://www.ncbi.nlm.nih.gov/pubmed/41108843) | metadata signals extractable PD data (IC50) |
| `Dupont_1987.pdf` | Dupont H et al., Inhibition of cytochrome P-450-dependen…, Biochemical pharmacology (1987) | pd | 4 | [10.1016/0006-2952(87)90050-5](https://doi.org/10.1016/0006-2952(87)90050-5) | [3496099](https://www.ncbi.nlm.nih.gov/pubmed/3496099) | metadata signals extractable PD data (IC50) |
| `Herraiz_2014.pdf` | Herraiz T et al., 5-(2-Aminopropyl)indole (5-IT): a psych…, Drug testing and analysis (2014) | pd | 4 | [10.1002/dta.1530](https://doi.org/10.1002/dta.1530) | [24115740](https://www.ncbi.nlm.nih.gov/pubmed/24115740) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T23:51:33.663111+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Baek_2018 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50/Ki) for hispidol and sulfuretin, with toloxatone mentioned only as a qualitative comparator; it does not report a pharmacodynamic or exposure-response relationship for toloxatone. |
| PD | Baek_2018_2 | not_relevant | 1 | 2 | The paper reports in vitro IC50 and Ki values for chelerythrine and toloxatone, but these are static enzyme inhibition constants, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| PD | Baek_2019 | not_relevant | 1 | 2 | The paper reports a single in vitro IC50 value for toloxatone as a reference standard but does not provide a dose-response curve, PK/PD model, or exposure-response analysis. |
| PD | Baek_2019_2 | not_relevant | 0 | 0 | The paper reports on Rhamnocitrin, not toloxatone, and focuses on MAO-A inhibition kinetics rather than toloxatone PD. |
| PD | Bester_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50 values for coumarin derivatives and mentions toloxatone only as a reference inhibitor without providing specific numeric PD parameters or exposure-response data for it. |
| PD | Dos_2026 | not_relevant | 0 | 0 | The paper evaluates MAO-B inhibitors using immobilized enzymes on magnetic beads, which is an in vitro biochemical assay, not a pharmacodynamic or exposure-response study in a biological system. |
| PD | El-Halaby_2025 | not_relevant | 1 | 1 | The paper reports in vitro IC50 values for MAO inhibition, which are pharmacodynamic potency metrics, but does not provide an exposure-response or dose-response curve, Emax, or PK/PD modeling for toloxatone or the new compounds. |
| PD | Lee_2017 | not_relevant | 0 | 0 | The paper reports in vitro IC50 and Ki values for natural compounds and mentions toloxatone only as a comparative benchmark for potency, without providing any pharmacokinetic data, exposure-response analysis, or dose-response curve for toloxatone. |
| PD | Pawa_2026 | not_relevant | 0 | 0 | The paper focuses on flavokawain A and only mentions toloxatone as a reference compound for selectivity comparison, without providing any exposure-response or dose-response data for toloxatone. |
| popPK | Schoerlin_1989 | irrelevant | 3 | 3 | Review article with only summary values (half-life ranges, fb) for toloxatone, no original compartmental/PK parameter values. |
| popPK | Vandel_1993 | irrelevant | 2 | 3 | Toloxatone is only the co-administered probe; the reported PK values (AMT/NT ratio) concern amitriptyline, not toloxatone's own disposition parameters. |
| PD | Zimmer_1990 | not_relevant | 3 | 2 | The paper provides qualitative comparisons and general ranges of MAO inhibition (e.g., 50-85%) and tyramine potentiation factors, but does not report specific numeric PD parameters (like EC50, Emax) or a fitted concentration-effect curve for toloxatone. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:51 UTC</sub>
