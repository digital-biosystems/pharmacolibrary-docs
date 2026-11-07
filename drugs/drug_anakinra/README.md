<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anakinra&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Anakinra_Ngo2020_reference&quot;,&quot;label&quot;:&quot;Ngo_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_anakinra/Anakinra_Ngo2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Anakinra_Urien2013_reference&quot;,&quot;label&quot;:&quot;Urien_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_anakinra/Anakinra_Urien2013_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# anakinra

- **generic name:** anakinra
- **ATC codes:** `L04AC03`
- **DrugBank:** [DB00026](https://go.drugbank.com/drugs/DB00026) · **PubChem:** none
- **groups:** approved, investigational

## About

Anakinra, an interleukin-1 receptor antagonist, is used to treat rheumatoid arthritis, systemic-onset juvenile idiopathic arthritis, and pericarditis, and has also been used for COVID-19. It is an approved medicine with an authorised product in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415411](https://www.wikidata.org/wiki/Q415411) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Urien_2013_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> children and adolescents with systemic-onset juvenile idiopathic arthritis and autoinflammatory syndromes. [Run it in the simulator](drugs/drug_anakinra/Anakinra_Urien2013_reference.md?tab=Simulation) · [record](drugs/drug_anakinra/Anakinra_Urien2013_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Ngo_2020 · CL/F</text><circle cx="245.7" cy="30.0" r="4" fill="#ef6c00"><title>Ngo_2020 · CL/F: 0.208 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Urien_2013 · CL/F ·/kg</text><circle cx="504.2" cy="46.0" r="4" fill="#78909c"><title>Urien_2013 · CL/F ·/kg: 6.24 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Urien_2013 · V/F</text><circle cx="475.0" cy="30.0" r="4" fill="#78909c"><title>Urien_2013 · V/F: 65.2 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Ngo_2020 · V1/F</text><circle cx="208.6" cy="46.0" r="4" fill="#ef6c00"><title>Ngo_2020 · V1/F: 11.3 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T6_deviations</sub> | [Ngo_2020_reference](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Ngo L et al., Development of a Pharmacokinetic Model…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12555](https://doi.org/10.1002/psp4.12555) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Urien_2013_reference](drugs/drug_anakinra/Anakinra_Urien2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+2 cov.) | Urien S et al., Anakinra pharmacokinetics in children a…, BMC pharmacology & toxicolo… (2013) | [10.1186/2050-6511-14-40](https://doi.org/10.1186/2050-6511-14-40) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Liu_2011_paw_edema](drugs/drug_anakinra/pd_Liu_2011_paw_edema.md) | paw swelling ← anakinra · disease-progression model | — | Liu D et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-011-9219-z](https://doi.org/10.1007/s10928-011-9219-z) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Ge_2003_TSM_tension](drugs/drug_anakinra/pd_Ge_2003_TSM_tension.md) | tension of isolated trachea biomarker turnover ← IL-1ra | — | Ge XQ et al., [Effects of human recombinant interleuk…, Yao xue xue bao = Acta phar… (2003) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Ge_2003_TSM_tension_2](drugs/drug_anakinra/pd_Ge_2003_TSM_tension_2.md) | tension of isolated trachea biomarker turnover ← IL-1ra | — | Ge XQ et al., [Effects of human recombinant interleuk…, Yao xue xue bao = Acta phar… (2003) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anakinra).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IL1R1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:38 | 1:37 | 2/0/0 | 1/1/0 | 0/0/0 | 184,407/10,427 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2011.pdf` | Liu D et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | popPK | 9 | [10.1007/s10928-011-9219-z](https://doi.org/10.1007/s10928-011-9219-z) | [22002845](https://pubmed.ncbi.nlm.nih.gov/22002845) | The paper describes a population PK model for anakinra in rats with a specific structure (2-comp, sequential absorption), and the abstract provides one quantitative PD parameter (Imax), implying PK parameter estimation is central, although the specific CL/Vd values are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-06 23:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arends_2015 | irrelevant | 0 | 0 | The study investigates TMX-101 (imiquimod) and does not report pharmacokinetic parameters for anakinra. |
| popPK | Fofie_2003 | irrelevant | 0 | 0 | The study focuses on cytokine levels and febrile responses in pregnant rats after endotoxin administration, containing no pharmacokinetic data or parameters for anakinra. |
| popPK | Gabrielsson_2015 | irrelevant | 0 | 0 | The paper is a review of challenge test design in animal models where anakinra is used only as a pharmacodynamic agent in a cytokine response study, without reporting quantitative PK parameters for anakinra. |
| popPK | Ge_2003 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of the pharmacodynamic effects of anakinra (IL-1ra) on guinea pig trachea smooth muscle and does not report pharmacokinetic parameters. |
| popPK | Green_2022 | relevant | 6 | 3 | The paper is a protocol for a PK study in humans and describes population PK modeling/simulation for dose selection, but specific numeric parameter values for the target population are in tables/figures not fully provided in the text evidence. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The study analyzes the reproducibility of cytokine levels (e.g., IL-1RA, G-CSF) and does not involve the drug anakinra or its pharmacokinetics. |
| popPK | Hannani_2026 | irrelevant | 0 | 0 | This is a cytokine profiling study measuring IL-1ra levels in osteoarthritis patients, not a pharmacokinetic study of the drug anakinra. |
| popPK | Horgan_2024 | irrelevant | 0 | 0 | This is a sports science study measuring inflammatory biomarkers (including endogenous IL-1ra) after exercise and hydrotherapy, not a pharmacokinetic study of the drug anakinra. |
| popPK | Kelly_2020 | irrelevant | 0 | 0 | The paper is a clinical study on HIV inflammation and arterial stiffness, not a pharmacokinetic study of anakinra. |
| popPK | Leoni_2015 | irrelevant | 0 | 0 | The paper focuses on neutrophil formyl peptide receptor phosphorylation and inflammation mechanisms, with no pharmacokinetic data for anakinra. |
| popPK | Liu_2011 | relevant | 9 | 4 | The paper describes a population PK model for anakinra in rats with a specific structure (2-comp, sequential absorption), and the abstract provides one quantitative PD parameter (Imax), implying PK parameter estimation is central, although the specific CL/Vd values are not explicitly listed in the provided abstract text. |
| popPK | Ngo_2020 | relevant | 8 | 2 | The study develops a population PK model for anakinra and reports parameters in Table S2 (supplementary material) which is not provided, although half-life is mentioned in the text. |
| popPK | Slim_2024 | irrelevant | 0 | 0 | The study investigates the effect of anakinra on immune biomarkers in a clinical trial context and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Spiekstra_2009 | irrelevant | 0 | 0 | The study focuses on in vitro skin irritation potency using surfactants and chemicals, not the pharmacokinetics of anakinra. |
| popPK | Takahashi_2026 | irrelevant | 1 | 0 | The paper is a general methodological study on sampling windows for NCA using various drug case studies and does not provide specific quantitative disposition parameters for anakinra in the provided text. |
| popPK | Todd_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytokine-induced prostaglandin production in human myometrial cells and does not report pharmacokinetic parameters for anakinra. |
| popPK | Towne_2011 | irrelevant | 0 | 0 | The paper describes the biological processing and signaling mechanisms of IL-36 cytokines in vitro and does not involve anakinra or any pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Banakinra%5D&body=Drug%3A%20anakinra%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_anakinra/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-06 23:37 UTC</sub>
