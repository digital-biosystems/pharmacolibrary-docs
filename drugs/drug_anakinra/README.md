<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anakinra&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Anakinra_Ngo2020_reference&quot;,&quot;label&quot;:&quot;Ngo_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_anakinra/Anakinra_Ngo2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# anakinra

- **generic name:** anakinra
- **ATC codes:** `L04AC03`
- **DrugBank:** [DB00026](https://go.drugbank.com/drugs/DB00026) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Anakinra, an interleukin-1 receptor antagonist, is used to treat rheumatoid arthritis, systemic-onset juvenile idiopathic arthritis, and pericarditis, and has also been used for COVID-19. It is an approved medicine with an authorised product in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415411](https://www.wikidata.org/wiki/Q415411) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Ngo_2020_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md?tab=Simulation) · [record](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.208 | L/h | 0.208 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ngo_2020_reference](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md) |
| V | V1/F | 11.3 | L | 11.3 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ngo_2020_reference](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md) |
| ka | kabs | 1.21 | 1/h | 1.21 1/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ngo_2020_reference](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Ngo_2020_reference](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Ngo L et al., Development of a Pharmacokinetic Model…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12555](https://doi.org/10.1002/psp4.12555) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Urien_2013_reference](drugs/drug_anakinra/Anakinra_Urien2013_reference.md) | — | general linear (no model) | 3 | Urien S et al., Anakinra pharmacokinetics in children a…, BMC pharmacology & toxicolo… (2013) | [10.1186/2050-6511-14-40](https://doi.org/10.1186/2050-6511-14-40) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Liu_2011_paw_edema](drugs/drug_anakinra/pd_Liu_2011_paw_edema.md) | paw swelling ← anakinra · disease-progression model | — | Liu D et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-011-9219-z](https://doi.org/10.1007/s10928-011-9219-z) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Ge_2003_TSM_tension](drugs/drug_anakinra/pd_Ge_2003_TSM_tension.md) | tension of isolated trachea biomarker turnover ← IL-1ra | — | Ge XQ et al., [Effects of human recombinant interleuk…, Yao xue xue bao = Acta phar… (2003) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Ge_2003_TSM_tension_2](drugs/drug_anakinra/pd_Ge_2003_TSM_tension_2.md) | tension of isolated trachea biomarker turnover ← IL-1ra | — | Ge XQ et al., [Effects of human recombinant interleuk…, Yao xue xue bao = Acta phar… (2003) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:38 | 1:37 | 1/1/0 | 1/1/0 | 0/0/0 | 184,407/10,427 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2011.pdf` | Liu D et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | popPK | 9 | [10.1007/s10928-011-9219-z](https://doi.org/10.1007/s10928-011-9219-z) | [22002845](https://pubmed.ncbi.nlm.nih.gov/22002845) | The paper describes a population PK model for anakinra in rats with a specific structure (2-comp, sequential absorption), and the abstract provides one quantitative PD parameter (Imax), implying PK parameter estimation is central, although the specific CL/Vd values are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-06T23:37:21.444772+00:00</sub>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:37 UTC</sub>
