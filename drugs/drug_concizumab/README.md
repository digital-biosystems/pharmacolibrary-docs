<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;concizumab&quot;}]"></div>

# concizumab

- **generic name:** concizumab
- **ATC codes:** `B02BX10`
- **DrugBank:** [DB12820](https://go.drugbank.com/drugs/DB12820) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Concizumab, a monoclonal antibody, is used to treat hemophilia A and hemophilia B. It is authorised in the European Union and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q104153457](https://www.wikidata.org/wiki/Q104153457) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 18:33 | 2:32 | 0/0/1 | 1/0/0 | 0/0/0 | 39,583/4,956 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.3). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Agersø_2014_reference](drugs/drug_concizumab/Concizumab_Agers2014_reference.md) | — | 1-compartment (no model) | 2 | Agersø H et al., Pharmacokinetics of an anti-TFPI monocl…, European journal of pharmac… (2014) | [10.1016/j.ejps.2014.02.009](https://doi.org/10.1016/j.ejps.2014.02.009) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Eichler_2019_TFPI](drugs/drug_concizumab/pd_Eichler_2019_TFPI.md) | free TFPI ← concizumab · direct sigmoid Emax (Hill) effect | — | Eichler H et al., Concizumab restores thrombin generation…, Haemophilia : the official… (2019) | [10.1111/hae.13627](https://doi.org/10.1111/hae.13627) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Eichler_2019_peak_TG](drugs/drug_concizumab/pd_Eichler_2019_peak_TG.md) | peak thrombin generation ← concizumab · direct sigmoid Emax (Hill) effect | — | Eichler H et al., Concizumab restores thrombin generation…, Haemophilia : the official… (2019) | [10.1111/hae.13627](https://doi.org/10.1111/hae.13627) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=concizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TFPI (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Agersø_2014.pdf` | Agersø H et al., Pharmacokinetics of an anti-TFPI monocl…, European journal of pharmac… (2014) | popPK | 10 | [10.1016/j.ejps.2014.02.009](https://doi.org/10.1016/j.ejps.2014.02.009) | [24568891](https://pubmed.ncbi.nlm.nih.gov/24568891) | The study reports quantitative PK parameters (CL, Km, CLsat, bioavailability) for concizumab in Cynomolgus monkeys, with key values explicitly stated in the abstract. |
| `Yuan_2019.pdf` | Yuan D et al., A systems pharmacokinetic/pharmacodynam…, European journal of pharmac… (2019) | popPK | 9 | [10.1016/j.ejps.2019.105032](https://doi.org/10.1016/j.ejps.2019.105032) | [31394258](https://pubmed.ncbi.nlm.nih.gov/31394258) | The paper describes a systems PK/PD model for concizumab in humans and animals, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-05T18:31:49.670543+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eichler_2019 | relevant | 8 | 2 | The paper describes a compartmental PK model for concizumab (CL, V1, V2, Q) but explicitly states that the detailed description and numeric parameter values are provided in a separate manuscript, leaving only qualitative descriptions and PD parameters (EC50) in the text. |
| popPK | Miyazawa_2025 | irrelevant | 2 | 0 | The paper is a mechanistic mathematical modeling study of coagulation that uses a fixed concizumab concentration (4 nM) as an input parameter, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| PGx | Shima_2016 | not_relevant | 0 | 0 | The paper is a general review of therapies for hemophilia inhibitors and mentions concizumab only as a novel therapeutic concept without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Yuan_2019 | relevant | 9 | 0 | The paper describes a systems PK/PD model for concizumab in humans and animals, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 18:31 UTC</sub>
