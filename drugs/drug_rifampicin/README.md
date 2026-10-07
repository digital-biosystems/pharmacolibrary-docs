<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;rifampicin&quot;}]"></div>

# rifampicin

- **generic name:** rifampicin
- **ATC codes:** `J04AB02`, `J04AM02`, `J04BA50`, `J04BA51`
- **DrugBank:** [DB01045](https://go.drugbank.com/drugs/DB01045) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rifampicin is an antibiotic used to treat tuberculosis, including pulmonary and miliary disease and tuberculous meningitis, as well as leprosy and some staphylococcal infections. It is widely used worldwide and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422652](https://www.wikidata.org/wiki/Q422652) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:24 | 2:40 | 0/0/0 | 0/1/1 | 0/0/0 | 127,294/3,389 | einfracz / qwen3.8-27b | 12 | 1/11 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Srivastava_2022_CFU](drugs/drug_rifampicin/pd_Srivastava_2022_CFU.md) | M. kansasii bacterial burden ← rifampin · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., Rifampin Pharmacokinetics/Pharmacodynam…, Antimicrobial agents and ch… (2022) | [10.1128/aac.02320-21](https://doi.org/10.1128/aac.02320-21) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muliaditan_2022_CFU_F](drugs/drug_rifampicin/pd_Muliaditan_2022_CFU_F.md) | Colony forming unit (CFU) count per lung (fast-growing population) ← rifampicin · disease-progression model | — | Muliaditan M et al., Bacterial growth dynamics and pharmacok…, British journal of pharmaco… (2022) | [10.1111/bph.15688](https://doi.org/10.1111/bph.15688) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Muliaditan_2022_CFU_S](drugs/drug_rifampicin/pd_Muliaditan_2022_CFU_S.md) | Colony forming unit (CFU) count per lung (slow-growing population) ← rifampicin · disease-progression model | — | Muliaditan M et al., Bacterial growth dynamics and pharmacok…, British journal of pharmaco… (2022) | [10.1111/bph.15688](https://doi.org/10.1111/bph.15688) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rifampicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` inducer, `SLC22A7` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2A6` inducer, `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer/inhibitor, `CYP2C9` inducer, `CYP2E1` inducer, `CYP3A4` inducer, `CYP3A5` inducer, `CYP3A7` inducer, `SLC22A7` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor/substrate, `UGT1A1` inducer, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `CYP3A5` inducer, `UGT1A1` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inducer, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (inducer), CYP3A43 (inducer), NR1I2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 438 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett_2002 | irrelevant | 0 | 0 | The study reports population PK parameters for the subject drug efavirenz, with rifampicin only mentioned as a co-administered drug affecting clearance, and no PK parameters for rifampicin are provided. |
| popPK | Bock_2023 | relevant | 8 | 2 | The study performs population PK modeling for rifampicin in humans, but the specific numeric parameter values (CL, V, etc.) are located in Supplementary Table 1, which is not provided in the evidence. |
| popPK | Calderin_2025 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of dexamethasone (a co-administered adjunctive therapy) while rifampicin is used as a co-administered drug to assess drug-drug interactions; no quantitative PK parameters for rifampicin itself are reported. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | The paper is a pharmacokinetic review of axitinib, and rifampicin is only mentioned as a co-administered inducer affecting axitinib's exposure, not as the subject drug. |
| popPK | Devineni_2015 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of canagliflozin, with rifampicin serving only as a co-administered drug in a drug-drug interaction study. |
| popPK | Gafar_2023 | irrelevant | 3 | 6 | The paper reports aggregate dose-normalized AUC and Cmax values for rifampicin but lacks compartmental parameters (CL, V, Q) or individual-level data required for population pharmacokinetic modeling. |
| popPK | Kengo_2025 | irrelevant | 1 | 1 | The study focuses on the pharmacokinetics of atazanavir and ritonavir; while rifampicin was co-administered and its effect characterized via a cited model, the primary reported parameters and subject drug are the antiretrovirals, and specific rifampicin parameter values are deferred to supplementary material. |
| popPK | Muda_2022 | irrelevant | 3 | 0 | This is a systematic review that summarizes findings from other studies but does not provide the original quantitative PK parameter values or specific numeric model results for extraction in the provided evidence. |
| popPK | Muliaditan_2021 | irrelevant | 3 | 0 | The study focuses on PK-PD modeling of antibacterial activity in mice and does not report quantitative pharmacokinetic disposition parameters (e.g., CL, V) for rifampicin. |
| popPK | Sanders_2026 | irrelevant | 1 | 0 | The study is a PBPK modeling investigation focused on drug-drug interactions involving elexacaftor, tezacaftor, and ivacaftor, with rifampin acting solely as a perpetrator/comparator agent rather than the subject of PK parameter estimation. |
| popPK | Sturkenboom_2021 | irrelevant | 3 | 1 | The paper is a narrative review that discusses rifampicin PK qualitatively and references other studies for numeric values, but does not report original quantitative disposition parameters (CL, V, Q, ka) or a specific population PK model with extractable numeric estimates in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
