<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ofatumumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofatumumab_Struemper2014_reference&quot;,&quot;label&quot;:&quot;Struemper_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ofatumumab

- **generic name:** ofatumumab
- **ATC codes:** `L01FA02`, `L01XC10`, `L04AA52`, `L04AG12`
- **DrugBank:** [DB06650](https://go.drugbank.com/drugs/DB06650) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ofatumumab is a monoclonal antibody used to treat B-cell blood cancers such as chronic lymphocytic leukemia and lymphoma, and is also used for relapsing-remitting multiple sclerosis. It is authorised in the European Union, where one product remains on the market while another has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410656](https://www.wikidata.org/wiki/Q410656) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:56 | 20:57 | 1/2/0 | 0/0/0 | 0/0/0 | 302,915/58,158 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | [Struemper_2014_reference](drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Struemper H et al., Population pharmacokinetics of ofatumum…, Journal of clinical pharmac… (2014) | [10.1002/jcph.268](https://doi.org/10.1002/jcph.268) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Coiffier_2010_reference](drugs/drug_ofatumumab/Ofatumumab_Coiffier2010_reference.md) | — | 1-compartment (no model) | 2 | Coiffier B et al., Pharmacokinetics and pharmacokinetic/ph…, British journal of haematol… (2010) | [10.1111/j.1365-2141.2010.08193.x](https://doi.org/10.1111/j.1365-2141.2010.08193.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.783). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yu_2022_reference](drugs/drug_ofatumumab/Ofatumumab_Yu2022_reference.md) | — | 2-compartment (no model) | 10 | Yu H et al., Population Pharmacokinetic-B Cell Model…, CNS drugs (2022) | [10.1007/s40263-021-00895-w](https://doi.org/10.1007/s40263-021-00895-w) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ofatumumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MS4A1 (antibody), MS4A1 (regulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Struemper_2014.pdf` | Struemper H et al., Population pharmacokinetics of ofatumum…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.268](https://doi.org/10.1002/jcph.268) | [24443277](https://pubmed.ncbi.nlm.nih.gov/24443277) | The paper reports a population PK model for ofatumumab with specific numeric values for linear clearance (7.5 mL/h) and volume of distribution (5.3 L) provided in the text. |

<sub>queue written 2026-10-07T18:36:39.727562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Colucci_2023 | irrelevant | 0 | 0 | The study is a clinical observational analysis of relapse risk and B-cell recovery markers, not a pharmacokinetic study reporting quantitative disposition parameters for ofatumumab. |
| popPK | Greco_2026 | irrelevant | 0 | 0 | The study reports optical coherence tomography (OCT) retinal thickness data, not pharmacokinetic parameters. |
| popPK | Huck_2019 | irrelevant | 0 | 0 | The study investigates a mouse anti-CD20 antibody in mice, not the human drug ofatumumab, and reports immunological effects rather than pharmacokinetic parameters. |
| popPK | Yuan_2026 | irrelevant | 0 | 0 | The paper is a narrative review discussing the development roadmap and biological rationale for B-cell targeting therapies, including ofatumumab, but it does not report original quantitative pharmacokinetic parameter values. |
| popPK | Zanghì_2026 | irrelevant | 0 | 0 | The study is a longitudinal observational analysis of cognitive and structural brain changes in multiple sclerosis patients, reporting no pharmacokinetic parameters for ofatumumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:37 UTC</sub>
