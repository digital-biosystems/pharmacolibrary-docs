<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;nefopam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nefopam_Djerada2014_reference&quot;,&quot;label&quot;:&quot;Djerada_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nefopam/Nefopam_Djerada2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nefopam_Mimoz2010_reference&quot;,&quot;label&quot;:&quot;Mimoz_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nefopam/Nefopam_Mimoz2010_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nefopam_Podranski2012_reference&quot;,&quot;label&quot;:&quot;Podranski_2012_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nefopam/Nefopam_Podranski2012_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nefopam

- **generic name:** nefopam
- **ATC codes:** `N02BG06`
- **DrugBank:** [DB12293](https://go.drugbank.com/drugs/DB12293)
- **groups:** approved, investigational, withdrawn

## About

**Description.** Nefopam is under investigation for the prevention of Cholecystitis and Post Anaesthetic Shivering. Nefopam has been investigated for the prevention of Kidney Transplantation.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 04:00 | 1:31 | 1/1/1 | 0/0/0 | 0/0/0 | 30,963/2,758 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span> | [Djerada_2014_reference](drugs/drug_nefopam/Nefopam_Djerada2014_reference.md) | Djerada Z et al., Population pharmacokinetics of nefopam…, British journal of clinical… (2014) | [10.1111/bcp.12291](https://doi.org/10.1111/bcp.12291) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Mimoz_2010_reference](drugs/drug_nefopam/Nefopam_Mimoz2010_reference.md) | Mimoz O et al., Nefopam pharmacokinetics in patients wi…, Anesthesia and analgesia (2010) | [10.1213/ANE.0b013e3181f33488](https://doi.org/10.1213/ANE.0b013e3181f33488) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Podranski_2012_reference](drugs/drug_nefopam/Nefopam_Podranski2012_reference.md) | Podranski T et al., Compartmental pharmacokinetics of nefop…, British journal of anaesthe… (2012) | [10.1093/bja/aer517](https://doi.org/10.1093/bja/aer517) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Djerada_2014.pdf` | Djerada Z et al., Population pharmacokinetics of nefopam…, British journal of clinical… (2014) | popPK | 10 | [10.1111/bcp.12291](https://doi.org/10.1111/bcp.12291) | [24252055](https://pubmed.ncbi.nlm.nih.gov/24252055) | The paper reports a population PK model for nefopam with explicit numeric values for clearance, volume of distribution, and intercompartmental clearance in the results section. |
| `Mimoz_2010.pdf` | Mimoz O et al., Nefopam pharmacokinetics in patients wi…, Anesthesia and analgesia (2010) | popPK | 10 | [10.1213/ANE.0b013e3181f33488](https://doi.org/10.1213/ANE.0b013e3181f33488) | [20971961](https://pubmed.ncbi.nlm.nih.gov/20971961) | The paper reports specific quantitative pharmacokinetic parameters (clearance, volume of distribution) for nefopam in both healthy volunteers and ESRD patients directly in the text. |
| `Mittur_2018.pdf` | Mittur A, A Simultaneous Mixed-Effects Pharmacoki…, European journal of drug me… (2018) | popPK | 10 | [10.1007/s13318-017-0457-3](https://doi.org/10.1007/s13318-017-0457-3) | [29305813](https://pubmed.ncbi.nlm.nih.gov/29305813) | The paper describes a population PK model for nefopam, but the provided evidence contains only the abstract and no numeric parameter values. |

<sub>queue written 2026-09-21T03:58:51.024726+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mittur_2018 | relevant | 10 | 0 | The paper describes a population PK model for nefopam, but the provided evidence contains only the abstract and no numeric parameter values. |
| popPK | Pérez-Gómez_2006 | irrelevant | 0 | 0 | The paper is an in-vitro neurotoxicity study where nefopam is used only as a comparator antagonist, not as the subject drug for pharmacokinetic analysis. |
| PD | Pérez-Gómez_2006 | not_relevant | 0 | 0 | The paper reports the neurotoxicity of yessotoxin (YTX) and mentions nefopam only as an ineffective antagonist in a qualitative context, providing no PD parameters or exposure-response data for nefopam. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 03:59 UTC</sub>
