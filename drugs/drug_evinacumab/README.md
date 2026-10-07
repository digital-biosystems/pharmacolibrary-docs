<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;evinacumab&quot;}]"></div>

# evinacumab

- **generic name:** evinacumab
- **ATC codes:** `C10AX17`
- **DrugBank:** [DB15354](https://go.drugbank.com/drugs/DB15354) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Evinacumab is a monoclonal antibody used as a lipid-modifying agent for hypercholesterolemia and type I hyperlipoproteinemia. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904115](https://www.wikidata.org/wiki/Q19904115) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:07 | 4:33 | 0/0/1 | 1/0/1 | 0/0/0 | 96,706/8,985 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Dingman_2024_reference](drugs/drug_evinacumab/Evinacumab_Dingman2024_reference.md) | — | 1-compartment (no model) | 2 | Dingman R et al., Evinacumab: Mechanism of action, clinic…, Clinical and translational… (2024) | [10.1111/cts.13836](https://doi.org/10.1111/cts.13836) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Bihorel_2025_LDL_C](drugs/drug_evinacumab/pd_Bihorel_2025_LDL_C.md) | LDL-C ← evinacumab · indirect response — drug inhibits the production of LDL-C | — | Bihorel S et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70016](https://doi.org/10.1002/psp4.70016) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Pu_2021_LDL_C](drugs/drug_evinacumab/pd_Pu_2021_LDL_C.md) | low-density lipoprotein cholesterol ← evinacumab · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | — | Pu X et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12711](https://doi.org/10.1002/psp4.12711) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=evinacumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ANGPTL3 (antibody), ANGPTL3 (binder), ANGPTL3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:04 UTC</sub>
