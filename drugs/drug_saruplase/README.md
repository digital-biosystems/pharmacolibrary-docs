<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;saruplase&quot;}]"></div>

# saruplase

- **generic name:** saruplase
- **ATC codes:** `B01AD08`
- **DrugBank:** [DB13646](https://go.drugbank.com/drugs/DB13646) · **PubChem:** not captured
- **groups:** investigational

## About

Saruplase is a fibrinolytic (clot-dissolving) enzyme classified as an antithrombotic agent, studied for dissolving blood clots. It is considered investigational and is not an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7424731](https://www.wikidata.org/wiki/Q7424731) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:41 | 1:27 | 0/0/1 | 0/0/0 | 0/0/0 | 51,779/2,529 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [de_1993_reference](drugs/drug_saruplase/Saruplase_de1993_reference.md) | — | 1-compartment (no model) | 1 | de Boer A et al., Pharmacokinetics of saruplase, a recomb…, Thrombosis and haemostasis (1993) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 44 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1993.pdf` | de Boer A et al., Pharmacokinetics of saruplase, a recomb…, Thrombosis and haemostasis (1993) | popPK | 9 | not captured | [8236142](https://pubmed.ncbi.nlm.nih.gov/8236142) | The abstract reports quantitative PK parameters for saruplase in humans (clearance 310-862 ml/min, Vc ~8 l), providing sufficient numerical data for extraction. |

<sub>queue written 2026-10-14T21:40:59.845235+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnelli_1993 | irrelevant | 0 | 0 | The study investigates K2tu-PA and rt-PA, not saruplase, and focuses on thrombolytic efficacy in rabbits rather than PK parameters for saruplase. |
| popPK | Aliabeva_1998 | irrelevant | 0 | 0 | The study investigates recombinant pro-urokinase (proRUK), not saruplase. |
| popPK | Alla_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of prourokinase (Pro-UK) for stroke and does not report pharmacokinetic parameters for saruplase. |
| popPK | Badylak_1988 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic dose-response of urokinase and t-PA in dogs, not the pharmacokinetics of saruplase. |
| popPK | Bell_2002 | irrelevant | 0 | 0 | The paper is a general review of thrombolytic agents and does not mention saruplase or provide any specific pharmacokinetic parameters for it. |
| PD | Bell_2002 | not_relevant | 0 | 0 | The text is a general review of thrombolytic agents and does not mention saruplase or provide any numeric pharmacodynamic parameters. |
| popPK | Breton_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a pro-urokinase-albumin conjugate, not saruplase. |
| popPK | Collen_1991 | irrelevant | 1 | 0 | Saruplase is used as a comparator agent to chimeric plasminogen activators, and the specific clearance values reported are relative fold-changes for the chimeras compared to saruplase, not absolute quantitative PK parameters (CL, V) for saruplase itself. |
| popPK | Dewerchin_1992 | irrelevant | 0 | 0 | The study investigates a different drug (MA-15C5Hu/scu-PA-32k) and does not mention or study saruplase. |
| popPK | Fitzgerald_1991 | irrelevant | 0 | 0 | The study investigates urokinase, t-PA, and prourokinase in a canine model, and saruplase is not mentioned or studied. |
| popPK | Frendl_2011 | irrelevant | 0 | 0 | The paper is a review of stroke management focusing on alteplase, tenecteplase, and other fibrinolytics; it does not mention saruplase or provide any pharmacokinetic parameters for it. |
| popPK | Gurewich_1984 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics and thrombolytic effects of urokinase (pro-UK), not saruplase. |
| popPK | Gurewich_1993 | irrelevant | 0 | 0 | The paper discusses pro-urokinase and prekallikrein on platelets, which is mechanistic and does not report quantitative pharmacokinetic parameters for saruplase. |
| popPK | Harder_2000 | irrelevant | 0 | 0 | This is a narrative review of drug interactions that discusses saruplase only mechanistically without reporting any quantitative pharmacokinetic parameters (CL, V, t1/2). |
| PD | Harder_2000 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and clinical management guidelines for thrombolytics, containing no numeric PD parameters, concentration-effect curves, or dose-response data for saruplase. |
| popPK | Higazi_1996 | irrelevant | 0 | 0 | The study is a mechanistic investigation of urokinase-plasminogen activator receptor binding in cell lines and does not report pharmacokinetic parameters for saruplase. |
| popPK | Higazi_1996_2 | irrelevant | 0 | 0 | The study investigates the biochemical mechanism of urokinase-type plasminogen activator and its inhibitor, not the pharmacokinetics of saruplase. |
| popPK | Himmelreich_1993 | irrelevant | 0 | 0 | The paper studies urokinase-type plasminogen activator (u-PA) in liver transplantation, not saruplase. |
| popPK | Himmelreich_1993_2 | irrelevant | 0 | 0 | The study investigates the kinetics of urokinase-type and tissue-type plasminogen activators (u-PA, t-PA) in liver transplant patients, not the pharmacokinetics of saruplase. |
| popPK | Holvoet_1993 | irrelevant | 0 | 0 | The study investigates chimeric plasminogen activators in hamsters, not the drug saruplase. |
| popPK | Komissarov_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and mechanisms of pro-urokinase (scuPA) in rabbits and humans, not saruplase. |
| PD | Koster_1994 | not_relevant | 3 | 2 | The paper reports PK parameters and qualitative changes in hemostatic markers (fibrinogen, alpha-2-antiplasmin) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Köhler_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of urokinase (tcu-PA/scu-PA), not saruplase. |
| popPK | Matveev_1999 | irrelevant | 0 | 0 | The study investigates the distribution of recombinant pro-urokinase in rabbits, which is a different drug from saruplase. |
| popPK | Morton_1989 | irrelevant | 0 | 0 | The paper focuses on the catabolism of tissue-type plasminogen activator (t-PA) in an in-vitro cell line and does not study saruplase or report its pharmacokinetic parameters. |
| popPK | Nguyen_1987 | irrelevant | 0 | 0 | The paper is a review of thrombolytic agents (t-PA, scu-PA, APSAC) and does not mention saruplase or provide any pharmacokinetic data. |
| popPK | Palazzolo_2023 | irrelevant | 0 | 0 | The paper studies a different drug (SCE5-scuPA) in mice and does not mention saruplase or its pharmacokinetics. |
| popPK | Spannagl_1995 | irrelevant | 0 | 0 | The study investigates urokinase-type plasminogen activator (u-PA), not saruplase. |
| popPK | Stefansson_1995 | irrelevant | 0 | 0 | The paper studies the endocytosis of urokinase and other plasminogen activators by gp330, not the pharmacokinetics of saruplase. |
| popPK | Stump_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of urokinase-type plasminogen activator (scu-PA) in rabbits and monkeys, not the drug saruplase. |
| popPK | Ueshima_2006 | irrelevant | 0 | 0 | The paper is a general review of fibrinolytic agents and does not contain any specific pharmacokinetic data or quantitative parameters for saruplase. |
| popPK | Verstraete_1999 | irrelevant | 0 | 0 | The paper is a review of various thrombolytic agents and does not mention saruplase or provide any PK parameters for it. |
| popPK | Verstraete_2000 | irrelevant | 0 | 0 | The paper is a review of third-generation thrombolytic drugs that does not mention saruplase or provide any quantitative pharmacokinetic parameters. |
| popPK | Wolfson_2020 | irrelevant | 0 | 0 | The study focuses on tPA and scuPA in sheep for lung injury, not saruplase pharmacokinetics. |
| PD | Wolfson_2020 | not_relevant | 3 | 1 | The paper describes a dose-response study in sheep but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect data in the provided text. |
| popPK | Yan_2007 | irrelevant | 0 | 0 | The study focuses on the design and characterization of a chimaeric plasminogen activator (mAnxB1-RGDS-ScuPA), not saruplase. |
| popPK | Zaitsev_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of a novel RBC-targeted pro-urokinase construct (scFv/uPA-T) in mice, not saruplase. |
| popPK | Zhang_1998 | irrelevant | 0 | 0 | The paper investigates the mechanism of LRP/alpha2MR regulation of plasminogen activator activity on trophoblast cells and does not study saruplase or report its pharmacokinetic parameters. |
| popPK | de_1995 | irrelevant | 1 | 0 | The paper is a review discussing drug interactions and general pharmacokinetic properties (high clearance) of saruplase but does not report specific quantitative PK parameter values. |
| PD | de_1995 | not_relevant | 1 | 0 | The text is a qualitative review of drug interactions and pharmacokinetic mechanisms (hepatic blood flow) without reporting any numeric PD parameters or concentration-effect data for saruplase. |
| PD | van_1995 | not_relevant | 2 | 1 | The study reports changes in PK parameters and qualitative trends in PD markers (u-PA antigen) relative to baseline, but does not provide a concentration-effect model, Emax/EC50, or numeric PD parameters describing the relationship between saruplase exposure and effect. |
| popPK | van_1995_2 | irrelevant | 0 | 0 | The study focuses on the receptor binding mechanisms of urokinase-type plasminogen activator (scu-PA) in rat liver cells, not saruplase. |
| popPK | van_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of recombinant tissue-type plasminogen activator (rt-PA), not saruplase. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:41 UTC</sub>
