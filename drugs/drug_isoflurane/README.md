<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;isoflurane&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Isoflurane_Williams2020_reference&quot;,&quot;label&quot;:&quot;Williams_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_isoflurane/Isoflurane_Williams2020_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# isoflurane

- **generic name:** isoflurane
- **ATC codes:** `N01AB06`
- **DrugBank:** [DB00753](https://go.drugbank.com/drugs/DB00753)
- **groups:** approved, investigational, vet_approved

## About

**Description.** A stable, non-explosive inhalation anesthetic, relatively free from significant side effects.

**Indication.** For induction and maintenance of general anesthesia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 0/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 20 | 7/0 | 12/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Williams_2020_reference](drugs/drug_isoflurane/Isoflurane_Williams2020_reference.md) | Williams CJA et al., Ectothermy and cardiac shunts profoundl…, Scientific reports (2020) | [10.1038/s41598-020-74014-y](https://doi.org/10.1038/s41598-020-74014-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=isoflurane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer/substrate, `CYP2E1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP2C1 (inhibitor), ATP5F1D (unknown), CALM1 (other/unknown), CHRNA4 (target), CHRNB2 (target), GABRA1 (positive allosteric modulator), GABRA1 (target), GLRA1 (target), GRIA1 (target), KCNA1 (inducer), MT-ND1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 280 matched, 60 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Escobar_2021 | irrelevant | 0 | 0 | Isoflurane is only the anesthetic background; the quantified PK parameters are for methadone, not isoflurane. |
| popPK | Fux_2022 | irrelevant | 0 | 0 | The evidence is about metamizole metabolites in calves; isoflurane is only the anesthetic co-administered, and no isoflurane PK parameters are reported. |
| popPK | Pypendop_2021 | irrelevant | 0 | 0 | The paper is about butorphanol in cats anesthetized with isoflurane, so isoflurane is only a co-administered anesthetic and no isoflurane PK parameters are reported. |
| popPK | Pypendop_2023 | irrelevant | 0 | 0 | The paper is about buprenorphine/norbuprenorphine PK in isoflurane-anesthetized cats, so isoflurane is only the anesthetic background, not the subject drug. |
| popPK | Steagall_2020 | irrelevant | 1 | 0 | The paper is about buprenorphine in dogs, while isoflurane is only an anesthetic co-administered background factor and no isoflurane PK parameters are reported. |
| popPK | White_2022 | irrelevant | 0 | 0 | The paper is about alfaxalone PK; isoflurane is only used as anesthesia, not the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:42 UTC</sub>
