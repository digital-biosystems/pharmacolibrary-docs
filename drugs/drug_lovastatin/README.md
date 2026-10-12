<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;lovastatin&quot;}]"></div>

# lovastatin

- **generic name:** lovastatin
- **ATC codes:** `C10AA02`, `C10BA01`
- **DrugBank:** [DB00227](https://go.drugbank.com/drugs/DB00227) · **PubChem:** [CID 53232](https://pubchem.ncbi.nlm.nih.gov/compound/53232)
- **molar mass:** 404.5396 g/mol (C24H36O5) — DrugBank
- **groups:** approved, investigational

## About

Lovastatin is a statin used to lower cholesterol in conditions such as hyperlipidemia, hypertriglyceridemia, and related cardiovascular diseases. It is an approved drug, used mainly in the United States, and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417740](https://www.wikidata.org/wiki/Q417740) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:33 | 1:59 | 0/0/1 | 1/0/0 | 0/0/0 | 71,130/1,702 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143), gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q64, Q77, Q86, Q67 — no SI value to…</sub><br><sub>route_to: `human_review`</sub> | [Huff_1992_reference](drugs/drug_lovastatin/Lovastatin_Huff1992_reference.md) | — | general linear (no model) | 4 | Huff MW et al., Dietary fish oil plus lovastatin decrea…, Arteriosclerosis and thromb… (1992) | [10.1161/01.atv.12.8.902](https://doi.org/10.1161/01.atv.12.8.902) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Isaev_2026_7_nACh_receptor_function](drugs/drug_lovastatin/pd_Isaev_2026_7_nACh_receptor_function.md) | α7-nACh receptor function ← lovastatin · direct Emax (saturable) effect | — | Isaev D et al., Lovastatin Potentiates the Function of…, Pharmaceuticals (Basel, Swi… (2026) | [10.3390/ph19060849](https://doi.org/10.3390/ph19060849) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lovastatin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | blood-brain barrier | `ABCB1` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `SLCO2B1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLCO1A2` inhibitor, `SLCO2B1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP3A4` substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` unknown, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HDAC2 (inhibitor), HMGCR (inhibitor), ITGAL (inhibitor), PON3 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 16 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2023 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel blocking activity in rabbit aortic strips, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Arad_1990 | irrelevant | 0 | 0 | The study investigates the metabolism of apolipoprotein B (apoB) and lipoproteins, not the pharmacokinetic disposition parameters (CL, V, ka) of lovastatin itself. |
| popPK | Arad_1992 | irrelevant | 0 | 0 | The study measures VLDL triglyceride and apolipoprotein B metabolism, not the pharmacokinetic parameters (CL, V, ka) of lovastatin itself. |
| popPK | Berglund_1994 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of lipoprotein particles (VLDL/LDL) in guinea pigs, not the pharmacokinetic parameters (CL, V, ka) of the drug lovastatin itself. |
| popPK | Cai_2021 | irrelevant | 0 | 0 | This is a systematic review of adverse events and does not report pharmacokinetic parameters for lovastatin. |
| popPK | Chiang_2015 | irrelevant | 0 | 0 | The study evaluates antioxidant and anti-inflammatory properties of mushroom fermented products and only reports the static concentration of lovastatin as a component, not pharmacokinetic parameters. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir, and lovastatin is only mentioned as a contraindicated interacting drug, not as the subject of PK analysis. |
| popPK | Haldar_2022 | irrelevant | 0 | 0 | The study investigates the effect of long-term statin use on fasting glucose levels (pharmacodynamics/safety) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for lovastatin. |
| popPK | Huff_1992 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of VLDL and LDL apolipoprotein B in pigs, not the pharmacokinetic parameters (CL, V, ka) of the drug lovastatin itself. |
| popPK | Ifergan_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of blood-brain barrier permeability and leukocyte migration, not a pharmacokinetic study reporting disposition parameters for lovastatin. |
| popPK | Isaev_2026 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of lovastatin on nicotinic acetylcholine receptors in vitro and in animal models, reporting no pharmacokinetic parameters. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study is a phytochemical isolation and in-vitro pharmacological assay where lovastatin is used only as a positive control, with no pharmacokinetic parameters reported. |
| popPK | Medh_1995 | irrelevant | 0 | 0 | The study focuses on the binding of the 39-kDa receptor-associated protein to LDL receptors, using lovastatin only as a tool to induce receptor expression, and does not report pharmacokinetic parameters for lovastatin. |
| popPK | Peng_2025 | irrelevant | 0 | 0 | The study investigates the antifungal effects of lovastatin on Botrytis cinerea, not its pharmacokinetics in a host species. |
| popPK | Quarfordt_1995 | irrelevant | 0 | 0 | The study focuses on cholesterol kinetics in mice, and lovastatin is used only as a therapeutic agent to modulate cholesterol levels, not as the subject of pharmacokinetic analysis. |
| popPK | Williams_2002_2 | irrelevant | 0 | 0 | The paper is a review of drug interactions and does not report original quantitative pharmacokinetic parameters for lovastatin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:32 UTC</sub>
