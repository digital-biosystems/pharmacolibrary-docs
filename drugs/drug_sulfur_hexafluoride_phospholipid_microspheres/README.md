<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08D&quot;,&quot;href&quot;:&quot;atc/V08D.md&quot;},{&quot;label&quot;:&quot;sulfur hexafluoride, phospholipid microspheres&quot;}]"></div>

# sulfur hexafluoride, phospholipid microspheres

- **generic name:** sulfur hexafluoride, phospholipid microspheres
- **ATC codes:** `V08DA05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

It is an ultrasound contrast agent used to improve imaging of the heart and other tissues. It is used in clinical practice as an injectable ultrasound contrast medium, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q279055](https://www.wikidata.org/wiki/Q279055) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:18 | 3:31 | 0/0/0 | 1/0/0 | 0/0/0 | 35,085/5,141 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Correas_2000_integrated_fractional_enhancement](drugs/drug_sulfur_hexafluoride_phospholipid_microspheres/pd_Correas_2000_integrated_fractional_enhancement.md) | integrated fractional enhancement ← BR1 (SonoVue) · direct linear effect | — | Correas JM et al., Infusion versus bolus of an ultrasound…, Investigative radiology (2000) | [10.1097/00004424-200001000-00008](https://doi.org/10.1097/00004424-200001000-00008) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hung_2011.pdf` | Hung SH et al., A simple method for quantifying ultraso…, Ultrasound in medicine & bi… (2011) | popPK | 7 | [10.1016/j.ultrasmedbio.2011.03.005](https://doi.org/10.1016/j.ultrasmedbio.2011.03.005) | [21546152](https://pubmed.ncbi.nlm.nih.gov/21546152) | Rat SonoVue pharmacokinetics are analyzed, but no numeric clearance or half-life values are provided in the evidence. |

<sub>queue written 2026-10-07T19:18:26.616982+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Berzigotti_2011 | irrelevant | 0 | 0 | SonoVue is used as a diagnostic contrast agent, and the reported values are perfusion measures rather than its pharmacokinetic parameters. |
| popPK | Correas_2000 | irrelevant | 0 | 0 | This is an imaging dose-response study and reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Fontanilla_2024 | irrelevant | 0 | 0 | This is a general CEUS overview and reports no quantitative disposition parameters for the subject drug. |
| popPK | Graham_2014 | irrelevant | 0 | 0 | SonoVue is only used as a microbubble aid, and no pharmacokinetic parameters for it are reported. |
| popPK | Hung_2011 | relevant | 7 | 0 | Rat SonoVue pharmacokinetics are analyzed, but no numeric clearance or half-life values are provided in the evidence. |
| popPK | Kaps_2001 | irrelevant | 2 | 0 | The dog study reports Doppler intensity and infusion conditions, but no numeric disposition parameters. |
| popPK | Morel_2000 | irrelevant | 3 | 1 | Human PK is assessed, but only elimination percentages and times are reported, not extractable disposition parameters. |
| popPK | Schneider_1999 | irrelevant | 2 | 3 | Human gas half-lives are reported, but no qualifying disposition parameters such as clearance, volume, or a PK model are provided. |
| popPK | Sridharan_2021 | irrelevant | 2 | 0 | The study examines contrast-agent wash-out but reports no readable numeric pharmacokinetic parameter values in the evidence. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | SonoVue is only a comparator, and no quantitative disposition parameters for it are reported. |
| popPK | Yudina_2011 | irrelevant | 0 | 0 | In vitro ultrasound drug-delivery study; SonoVue microbubbles are not the subject and no pharmacokinetic parameters are reported. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The numeric pharmacokinetic values are for indocyanine green, not sulfur hexafluoride phospholipid microspheres. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
