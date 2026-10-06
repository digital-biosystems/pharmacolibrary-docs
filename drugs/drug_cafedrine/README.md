<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;cafedrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cafedrine_Dings2026_reference&quot;,&quot;label&quot;:&quot;Dings_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cafedrine/Cafedrine_Dings2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# cafedrine

- **generic name:** cafedrine
- **ATC codes:** `C01CA21`
- **DrugBank:** [DB12926](https://go.drugbank.com/drugs/DB12926) · **PubChem:** [CID 5489638](https://pubchem.ncbi.nlm.nih.gov/compound/5489638)
- **molar mass:** 357.414 g/mol (C18H23N5O3) — DrugBank
- **groups:** investigational

## About

Cafedrine is a chemical compound described as an antihypertensive drug and vasodilator, classified as a cardiac stimulant acting on the cardiovascular system. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5017121](https://www.wikidata.org/wiki/Q5017121) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 04:31 | 1:59 | 1/1/0 | 0/0/2 | 0/0/0 | 68,335/3,145 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/4 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Dings_2026_reference](drugs/drug_cafedrine/Cafedrine_Dings2026_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Dings_2024_reference](drugs/drug_cafedrine/Cafedrine_Dings2024_reference.md) | — | 1-compartment (no model) | 2 | Dings C et al., Population kinetic/pharmacodynamic mode…, British journal of clinical… (2024) | [10.1111/bcp.16083](https://doi.org/10.1111/bcp.16083) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Dings_2024_DBP](drugs/drug_cafedrine/pd_Dings_2024_DBP.md) | diastolic blood pressure ← cafedrine · direct Emax (saturable) effect | model (no simulator) | Dings C et al., Population kinetic/pharmacodynamic mode…, British journal of clinical… (2024) | [10.1111/bcp.16083](https://doi.org/10.1111/bcp.16083) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Dings_2024_HR](drugs/drug_cafedrine/pd_Dings_2024_HR.md) | heart rate ← cafedrine · direct Emax (saturable) effect | model (no simulator) | Dings C et al., Population kinetic/pharmacodynamic mode…, British journal of clinical… (2024) | [10.1111/bcp.16083](https://doi.org/10.1111/bcp.16083) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Dings_2024_SBP](drugs/drug_cafedrine/pd_Dings_2024_SBP.md) | systolic blood pressure ← cafedrine · direct Emax (saturable) effect | model (no simulator) | Dings C et al., Population kinetic/pharmacodynamic mode…, British journal of clinical… (2024) | [10.1111/bcp.16083](https://doi.org/10.1111/bcp.16083) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Dings_2026_HR](drugs/drug_cafedrine/pd_Dings_2026_HR.md) | Heart rate ← cafedrine/theodrenaline · direct Emax (saturable) effect | model (no simulator) | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Dings_2026_MAP](drugs/drug_cafedrine/pd_Dings_2026_MAP.md) | Mean arterial pressure ← cafedrine/theodrenaline · direct Emax (saturable) effect | model (no simulator) | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Dings_2026_SBP](drugs/drug_cafedrine/pd_Dings_2026_SBP.md) | Systolic blood pressure ← cafedrine/theodrenaline · direct Emax (saturable) effect | model (no simulator) | Dings C et al., Pharmacometric Analysis of Cafedrine/Th…, Pharmaceutics (2026) | [10.3390/pharmaceutics18030296](https://doi.org/10.3390/pharmaceutics18030296) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dings_2024 | irrelevant | 2 | 2 | The study develops a kinetic/pharmacodynamic (K/PD) model for hemodynamic effects (BP, HR) rather than a pharmacokinetic model, explicitly stating that volume of distribution was fixed to 1 due to lack of PK data, and does not report standard PK parameters like clearance or volume for cafedrine. |
| popPK | Dings_2026 | irrelevant | 2 | 2 | The study explicitly states that no pharmacokinetic samples were obtained and the kinetic parameters (CL, V) are from a hypothetical K/PD model with V fixed to 1 L, not true disposition parameters. |
| popPK | Heller_2015 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (time to MAP increase, dose-response) rather than pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Kloth_2017 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of contractile force and tension, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Simon_2019 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of various antibiotics and analgesics (linezolid, meropenem, etc.) in obese patients, but does not mention or study cafedrine. |
| PD | Simon_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a PK trial and does not report any results, data, or PD parameters for cafedrine or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 04:30 UTC</sub>
