<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;indometacin&quot;}]"></div>

# indometacin

- **generic name:** indometacin
- **ATC codes:** `C01EB03`, `M01AB01`, `M02AA23`, `S01BC01`, `S01CC02`
- **DrugBank:** [DB00328](https://go.drugbank.com/drugs/DB00328) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Indometacin is a non-steroidal anti-inflammatory drug used to treat pain and inflammation in conditions such as osteoarthritis, rheumatoid arthritis, gout attacks, bursitis, enthesopathy, and to close a patent ductus arteriosus. It is an approved medicine, available in oral and topical forms for joint and muscular pain as well as eye use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409231](https://www.wikidata.org/wiki/Q409231) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| indometacin | parent | 357.79 | C19H16ClNO4 | PubChem | [3715](https://pubchem.ncbi.nlm.nih.gov/compound/3715) | Smyth_2004, Smyth_2004_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:35 | 0:57 | 0/0/3 | 0/0/0 | 0/0/0 | 41,925/3,506 | einfracz / qwen3.8-27b | 12 | 12/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625), gpt-oss:120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Smyth_2004_1000_bootstrap_samples](drugs/drug_indometacin/Indometacin_Smyth2004_1000_bootstrap_samples.md) | — | 1-compartment (no model) | 2 | Smyth JM et al., Intravenous indometacin in preterm infa…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875), gpt-oss:120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Smyth_2004_original_dataset](drugs/drug_indometacin/Indometacin_Smyth2004_original_dataset.md) | — | 1-compartment (no model) | 2 | Smyth JM et al., Intravenous indometacin in preterm infa…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.444). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q99, Q308 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Smyth_2004_2_reference](drugs/drug_indometacin/Indometacin_Smyth2004v2_reference.md) | — | 1-compartment (no model) | 3 | Smyth JM et al., Intravenous indometacin in preterm infa…, British journal of clinical… (2004) | [10.1111/j.1365-2125.2004.02139.x](https://doi.org/10.1111/j.1365-2125.2004.02139.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=indometacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `SLCO1A2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `SLCO1A2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | kidney | `SLC22A7` substrate, `UGT1A9` substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `SLC10A1` substrate, `SLC22A7` substrate, `SLCO1B1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT1A9` substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor/substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCC2` inhibitor/substrate, `ABCC4` inhibitor, `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` inhibitor/substrate, `ABCC3` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor/substrate, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC11 (inhibitor), ABCC6 (inhibitor), AKR1C3 (inhibitor), EIF2AK2 (inducer), GLO1 (inhibitor), PLA2G2A (inhibitor), PPARA (target), PPARG (activator), PTGDR2 (other/unknown), PTGR2 (inhibitor), PTGS1 (inhibitor), PTGS2 (inhibitor), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 11  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tanaka_2016.pdf` | Tanaka S et al., Prediction of fetal ductus arteriosus c…, International journal of cl… (2016) | popPK | 8 | [10.5414/CP202532](https://doi.org/10.5414/CP202532) | [27285464](https://pubmed.ncbi.nlm.nih.gov/27285464) | The study develops a PK/PD model for indometacin, but specific numeric PK parameters are derived from literature citations and the full text provided does not list the specific values. |

<sub>queue written 2026-10-14T23:35:07.383420+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cui_2016_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of zaltoprofen, with indometacin serving only as a positive control for analgesic efficacy. |
| PD | Cui_2016_2 | not_relevant | 0 | 0 | The paper focuses on the transdermal delivery of zaltoprofen; indometacin is only used as a commercial comparator for qualitative analgesic effect, with no exposure-response or dose-response modeling or numeric PD parameters reported for it. |
| popPK | Fu_2010 | irrelevant | 0 | 0 | The study investigates the mechanism of action of betulinic acid in rat aorta, using indometacin only as a pharmacological control to rule out cyclooxygenase involvement, with no PK parameters reported. |
| PD | Fu_2010 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of betulinic acid, not indometacin; indometacin is only mentioned as a negative control inhibitor. |
| popPK | Nielsen_2009_2 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for gentamicin, with indometacin only mentioned as a concomitant medication, not as the subject drug. |
| popPK | Pesić_2002 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation where indometacin is used only as a tool compound (cyclooxygenase inhibitor) to study vascular reactivity, not as the subject drug for PK parameter determination. |
| PD | Pesić_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacology of acetylcholine on human arteries; indometacin is used only as a control inhibitor and no exposure-response or dose-response relationship for indometacin itself is reported. |
| popPK | Racké_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of noradrenaline release in rat stomach tissue where indometacin is used solely as a non-affecting control agent, with no PK parameters reported. |
| PD | Racké_1995 | not_relevant | 0 | 0 | The paper states that indometacin did not affect noradrenaline overflow, providing no numeric PD parameters or dose-response relationship for the drug. |
| popPK | Reimer_1996 | irrelevant | 0 | 0 | Indometacin is used only as a co-administered agent to prevent inflammation in an in-vitro/isolated organ study, and no pharmacokinetic parameters for indometacin are reported. |
| PD | Reimer_1996 | not_relevant | 0 | 0 | The paper investigates peptide hormone (VIP/secretin) pharmacology; indometacin is used only as a background treatment to inhibit prostaglandin synthesis and is not the subject of any exposure-response or dose-response analysis. |
| popPK | Tanaka_2016 | relevant | 8 | 1 | The study develops a PK/PD model for indometacin, but specific numeric PK parameters are derived from literature citations and the full text provided does not list the specific values. |
| popPK | Tirapelli_2008 | irrelevant | 0 | 0 | Indometacin is used only as a mechanistic pharmacological tool (cyclooxygenase inhibitor) in a vascular physiology study, not as the subject of pharmacokinetic analysis. |
| PD | Tirapelli_2008 | not_relevant | 3 | 0 | The paper mentions indometacin qualitatively as a tool to reduce the maximum effect (Emax) of phenylephrine, but it does not report a concentration-effect or dose-response relationship for indometacin itself, nor does it provide numeric PD parameters for indometacin. |
| popPK | Uchôa_2009 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of a novel compound PG15, using indometacin only as a comparator for pharmacodynamic activity in the abstract. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:35 UTC</sub>
