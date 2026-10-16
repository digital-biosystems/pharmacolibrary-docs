<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;fluvastatin&quot;}]"></div>

# fluvastatin

- **generic name:** fluvastatin
- **ATC codes:** `C10AA04`
- **DrugBank:** [DB01095](https://go.drugbank.com/drugs/DB01095) · **PubChem:** [CID 1548972](https://pubchem.ncbi.nlm.nih.gov/compound/1548972)
- **molar mass:** 411.473 g/mol (C24H26FNO4) — DrugBank
- **groups:** approved, investigational

## About

Fluvastatin is a statin used to treat high cholesterol and related lipid disorders, including hypercholesterolemia, atherosclerosis, and coronary artery disease. It is an approved medicine and remains in use for lowering blood lipids.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417942](https://www.wikidata.org/wiki/Q417942) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:11 | 2:44 | 0/0/0 | 0/0/1 | 0/0/0 | 105,857/2,113 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Faltaos_2006_LDL](drugs/drug_fluvastatin/pd_Faltaos_2006_LDL.md) | LDL cholesterol ← fluvastatin · indirect response — drug inhibits the production of LDL cholesterol | — | Faltaos DW et al., Use of an indirect effect model to desc…, Fundamental & clinical phar… (2006) | [10.1111/j.1472-8206.2006.00404.x](https://doi.org/10.1111/j.1472-8206.2006.00404.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fluvastatin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` unknown | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor/substrate, `SLCO2B1` unknown | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor/substrate, `CYP2D6` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` substrate, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HDAC2 (inhibitor), HMGCR (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2023 | irrelevant | 0 | 0 | The study investigates the vasorelaxant and calcium channel blocking effects of fluvastatin in isolated aortic strips and hypertensive rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Ali_2023_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel blocking activity in rabbit aortic strips, not a pharmacokinetic study, and fluvastatin is only mentioned as a comparator in the background. |
| popPK | Capra_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling where fluvastatin is used as a prenylation inhibitor, not a pharmacokinetic study of fluvastatin. |
| popPK | Delang_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiviral activity and does not report pharmacokinetic parameters for fluvastatin. |
| popPK | Faltaos_2006 | irrelevant | 2 | 0 | The study is a pharmacodynamic (PD) model of LDL cholesterol levels where fluvastatin pharmacokinetic parameters (half-life) were fixed to literature values rather than estimated from data, and no quantitative PK parameters (CL, V, Q, ka) for fluvastatin are reported. |
| popPK | Lill_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cyclosporine, with fluvastatin listed only as a co-administered drug in an interaction analysis. |
| popPK | Lin_1999 | irrelevant | 0 | 0 | The study investigates vascular structure and function (morphometry and reactivity) in rats, not pharmacokinetic parameters. |
| popPK | Lu_2019 | irrelevant | 0 | 0 | The study is an in-vitro transporter interaction study where fluvastatin is used only as a probe substrate, and no pharmacokinetic disposition parameters (CL, V, etc.) for fluvastatin are reported. |
| popPK | Masuda_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of the hNTCP transporter using fluvastatin only as a substrate to demonstrate transport activity, not a pharmacokinetic study of fluvastatin disposition. |
| popPK | Meda_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of endothelial signaling and cytotoxicity, reporting no pharmacokinetic parameters for fluvastatin. |
| popPK | Mouawad_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of HO-1 induction in mouse macrophages and does not report pharmacokinetic parameters for fluvastatin. |
| popPK | Nishimura_2009 | irrelevant | 0 | 0 | The study is an in-vitro virology experiment measuring antiviral efficacy (EC50) of fluvastatin on HCV replicons, not a pharmacokinetic study of fluvastatin disposition. |
| popPK | Ongini_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NO-releasing statin derivatives, reporting pharmacodynamic endpoints (cGMP, proliferation, inflammation) rather than pharmacokinetic disposition parameters for fluvastatin. |
| popPK | Peng_2025 | irrelevant | 0 | 0 | The study investigates the antifungal effects of fluvastatin on Botrytis cinerea, not its pharmacokinetics in a host species. |
| popPK | Sato_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter interactions where fluvastatin is used only as a probe substrate, not as the subject of a pharmacokinetic parameter estimation. |
| popPK | Williams_2002_2 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for fluvastatin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
