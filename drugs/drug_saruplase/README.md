<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;saruplase&quot;}]"></div>

# saruplase

- **generic name:** saruplase
- **ATC codes:** `B01AD08`
- **DrugBank:** [DB13646](https://go.drugbank.com/drugs/DB13646) · **PubChem:** not captured
- **groups:** investigational

## About

Saruplase is a fibrinolytic (clot-dissolving) enzyme classified as an antithrombotic agent, studied for dissolving blood clots. It is considered investigational and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7424731](https://www.wikidata.org/wiki/Q7424731) and the WHO ATC classification; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| V | V/F | 8 | L | 8 l | healthy male subjects | &gt;=6 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [de_1993_reference](drugs/drug_saruplase/Saruplase_de1993_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [de_1993_reference](drugs/drug_saruplase/Saruplase_de1993_reference.md) | — | 1-compartment (no model) | 1 | de Boer A et al., Pharmacokinetics of saruplase, a recomb…, Thrombosis and haemostasis (1993) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:12 | 5:04 | 1/0/0 | 0/0/0 | 0/0/0 | 117,688/10,810 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 65 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1993.pdf` | de Boer A et al., Pharmacokinetics of saruplase, a recomb…, Thrombosis and haemostasis (1993) | popPK | 10 | not captured | [8236142](https://pubmed.ncbi.nlm.nih.gov/8236142) | The abstract explicitly reports quantitative pharmacokinetic parameters for saruplase, including clearance (310-862 ml/min) and central volume of distribution (~8 L). |

<sub>queue written 2026-10-05T16:09:19.255181+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1993 | irrelevant | 0 | 0 | The study investigates the thrombolytic and hemorrhagic effects of K2tu-PA and t-PA in rabbits, not the pharmacokinetics of saruplase. |
| popPK | Aliabeva_1998 | irrelevant | 0 | 0 | The study investigates recombinant pro-urokinase (proRUK), not saruplase. |
| popPK | Alla_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy for prourokinase (Pro-UK), not a pharmacokinetic study of saruplase. |
| popPK | Badylak_1988 | irrelevant | 0 | 0 | The study investigates single chain urokinase plasminogen activator (scu-PA) and t-PA, not saruplase, and does not report population pharmacokinetic parameters for the target drug. |
| popPK | Bell_2002 | irrelevant | 0 | 0 | The paper is a general review of thrombolytic agents and does not mention saruplase or provide any specific pharmacokinetic parameters for it. |
| PD | Bell_2002 | not_relevant | 0 | 0 | The text is a general review of thrombolytic agents and does not mention saruplase or provide any numeric pharmacodynamic parameters. |
| popPK | Breton_1995 | irrelevant | 0 | 0 | The study investigates a pro-urokinase derivative conjugate, not saruplase. |
| popPK | Collen_1991 | irrelevant | 2 | 0 | The study focuses on chimeric t-PA/u-PA molecules with saruplase (rscu-PA) serving only as a comparator, and no specific quantitative PK parameters (CL, V, t1/2 values) for saruplase are provided in the text. |
| popPK | Dewerchin_1992 | irrelevant | 0 | 0 | The study investigates a recombinant chimeric plasminogen activator (MA-15C5Hu/scu-PA-32k), not saruplase. |
| popPK | Fitzgerald_1991 | irrelevant | 0 | 0 | The study investigates urokinase, t-PA, and prourokinase in a canine model, and saruplase is not mentioned or studied. |
| popPK | Frendl_2011 | irrelevant | 0 | 0 | The paper is a review of stroke management and fibrinolytic drugs (alteplase, tenecteplase, etc.) and does not mention saruplase or provide any pharmacokinetic parameters for it. |
| popPK | Gurewich_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and thrombolytic effects of urokinase (pro-UK), not saruplase. |
| popPK | Gurewich_1993 | irrelevant | 0 | 0 | The paper discusses pro-urokinase and prekallikrein on platelets, not the pharmacokinetics of saruplase. |
| popPK | Harder_2000 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report quantitative pharmacokinetic parameters for saruplase. |
| PD | Harder_2000 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and clinical management guidelines for thrombolytics, containing no numeric PD parameters, concentration-effect curves, or dose-response data for saruplase. |
| popPK | Higazi_1996 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on urokinase receptor interactions and does not report pharmacokinetic parameters for saruplase. |
| popPK | Higazi_1996_2 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on urokinase-type plasminogen activator (uPA) and does not involve the drug saruplase or report any pharmacokinetic parameters. |
| popPK | Himmelreich_1993 | irrelevant | 0 | 0 | The paper discusses urokinase-type plasminogen activator (u-PA) in liver transplantation and does not mention saruplase or report any pharmacokinetic parameters for it. |
| popPK | Himmelreich_1993_2 | irrelevant | 0 | 0 | The study investigates urokinase-type plasminogen activator (u-PA) and tissue-type plasminogen activator (t-PA) in liver transplantation, not the drug saruplase. |
| popPK | Holvoet_1993 | irrelevant | 0 | 0 | The study investigates chimeric plasminogen activators (scu-PA derivatives) in hamsters, not saruplase. |
| popPK | Komissarov_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of prourokinase (scuPA) and urokinase (uPA), not saruplase. |
| PD | Koster_1994 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in hemostatic markers (fibrinogen, alpha-2-antiplasmin) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Köhler_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of urokinase (scu-PA/tcu-PA), not saruplase. |
| popPK | Matveev_1999 | irrelevant | 0 | 0 | The study investigates the distribution of recombinant pro-urokinase (PRU), not saruplase. |
| popPK | Morton_1989 | irrelevant | 0 | 0 | The study investigates the catabolism of tissue-type plasminogen activator (t-PA) in Hep G2 cells, not saruplase. |
| popPK | Nguyen_1987 | irrelevant | 0 | 0 | The paper is a review of thrombolytic agents (t-PA, scu-PA, APSAC) and does not mention saruplase or report any pharmacokinetic parameters for it. |
| popPK | Palazzolo_2023 | irrelevant | 0 | 0 | The study investigates a novel thrombolytic agent (SCE5-scuPA) in mice, not saruplase. |
| popPK | Spannagl_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of urokinase-type plasminogen activator (u-PA) in the presence of aprotinin, not saruplase. |
| popPK | Stefansson_1995 | irrelevant | 0 | 0 | The paper is a mechanistic study on gp330-mediated endocytosis of urokinase and PAI-1 in cell lines, not a pharmacokinetic study of saruplase. |
| popPK | Stump_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of urokinase-type plasminogen activator (scu-PA), not saruplase. |
| popPK | Ueshima_2006 | irrelevant | 0 | 0 | The paper is a general review of fibrinolytic agents and does not contain any specific pharmacokinetic data or quantitative parameters for saruplase. |
| popPK | Verstraete_1999 | irrelevant | 0 | 0 | The paper is a review of newer thrombolytic agents (monteplase, TNK-t-PA, reteplase, etc.) and does not mention saruplase or provide any pharmacokinetic parameters for it. |
| popPK | Verstraete_2000 | irrelevant | 0 | 0 | The paper is a review of third-generation thrombolytic drugs that does not mention saruplase or provide any quantitative pharmacokinetic parameters. |
| popPK | Wolfson_2020 | irrelevant | 0 | 0 | The study investigates the efficacy of plasminogen activators (tPA/scuPA) in a lung injury model and does not report pharmacokinetic parameters for saruplase. |
| PD | Wolfson_2020 | not_relevant | 3 | 1 | The paper describes a dose-response study in sheep but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect data in the provided text. |
| popPK | Yan_2007 | irrelevant | 0 | 0 | The study focuses on a chimaeric plasminogen activator (mAnxB1-RGDS-ScuPA) and does not report pharmacokinetic parameters for saruplase. |
| popPK | Zaitsev_2010 | irrelevant | 0 | 0 | The study investigates a novel RBC-targeted pro-urokinase construct (scFv/uPA-T) in mice, not the drug saruplase. |
| popPK | Zhang_1998 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on trophoblast cells and does not involve the drug saruplase or report any pharmacokinetic parameters. |
| popPK | de_1995 | irrelevant | 1 | 0 | The paper is a review discussing drug interactions and general pharmacokinetic properties (high clearance) of saruplase but does not report specific quantitative PK parameter values. |
| PD | de_1995 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and pharmacokinetic mechanisms (hepatic blood flow) without reporting any numeric PD parameters or concentration-effect data for saruplase. |
| PD | van_1995 | not_relevant | 2 | 1 | The study reports changes in PK parameters and qualitative trends in PD markers (u-PA antigen) relative to baseline, but does not provide a concentration-effect model, Emax/EC50, or numeric PD parameters describing the relationship between saruplase exposure and effect. |
| popPK | van_1995_2 | irrelevant | 0 | 0 | The study investigates the binding of urokinase-type plasminogen activator (u-PA) to rat liver cells, not the pharmacokinetics of saruplase. |
| popPK | van_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant tissue-type plasminogen activator (rt-PA), not saruplase. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 16:09 UTC</sub>
