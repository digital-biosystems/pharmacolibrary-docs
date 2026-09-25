<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;peginesatide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Peginesatide_Naik2013_reference&quot;,&quot;label&quot;:&quot;Naik_2013_reference&quot;,&quot;href&quot;:&quot;drugs/drug_peginesatide/Peginesatide_Naik2013_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# peginesatide

- **generic name:** peginesatide
- **ATC codes:** `B03XA04`
- **DrugBank:** [DB08894](https://go.drugbank.com/drugs/DB08894)
- **groups:** approved, withdrawn

## About

**Description.** Peginesatide is a synthetic peptide attached to polyethylene glycol for the treatment of anemia. The polyethylene glycol moiety helps make the drug less immunogenic and prolongs its plasma half-life. Chemically, peginesatide is designed to mimic the pharmacological activity of erythropoietin, but is not a replica of the structure itself. Peginesatide consists of two 21-amino acid chains that are covalently bonded by a linker derived from iminodiacetic acid and β-alanine. FDA approved March 27, 2012.

**Indication.** Peginesatide is used for the treatment of anemia due to chronic kidney disease (CKD) in adult patients on dialysis

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 01:20 | 1:22 | 0/0/1 | 1/0/0 | 0/0/0 | 69,958/673 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>blocking: C2_reference failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Naik_2013_reference](drugs/drug_peginesatide/Peginesatide_Naik2013_reference.md) | Naik H et al., A Population Pharmacokinetic and Pharma…, PloS one (2013) | [10.1371/journal.pone.0066422](https://doi.org/10.1371/journal.pone.0066422) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Naik_2013](drugs/drug_peginesatide/pd_Naik_2013_Hgb.md) | Naik H et al., A Population Pharmacokinetic and Pharma…, PloS one (2013) | [10.1371/journal.pone.0066422](https://doi.org/10.1371/journal.pone.0066422) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=peginesatide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…d intravenously or subcutaneously is primarily excreted via urine. Most of the excreted do…”</sub> | prose |

<sub>Actors without a tissue in the table: EPOR (stimulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 01:19 UTC</sub>
