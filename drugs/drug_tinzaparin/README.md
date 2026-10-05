<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tinzaparin&quot;}]"></div>

# tinzaparin

- **generic name:** tinzaparin
- **ATC codes:** `B01AB10`
- **DrugBank:** [DB06822](https://go.drugbank.com/drugs/DB06822) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tinzaparin is a low molecular weight heparin used as an anticoagulant, including in the treatment of pulmonary embolism. It is an approved medication and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817252](https://www.wikidata.org/wiki/Q20817252) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:51 | 5:33 | 0/1/1 | 1/0/0 | 0/0/0 | 59,351/17,540 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.727). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gouin-Thibault_2024_reference](drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference.md) | — | 1-compartment (no model) | 4 | Gouin-Thibault I et al., Tinzaparin, an alternative to subcutane…, Journal of thrombosis and h… (2024) | [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Johansen_1994_reference](drugs/drug_tinzaparin/Tinzaparin_Johansen1994_reference.md) | — | 1-compartment (no model) | 0 | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Brindley_1993_E](drugs/drug_tinzaparin/pd_Brindley_1993_E.md) | anticoagulant effect ← tinzaparin · direct sigmoid Emax (Hill) effect | — | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tinzaparin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | adipose tissue | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADAMTS4 (inhibitor), CXCL12 (binder), ITGA4 (inhibitor), SERPINC1 (potentiator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barrett_2001.pdf` | Barrett JS et al., Population pharmacodynamics in patients…, International journal of cl… (2001) | popPK | 10 | not captured | [11680668](https://pubmed.ncbi.nlm.nih.gov/11680668) | The paper reports quantitative population pharmacokinetic parameters (CL, Vc, half-life) for tinzaparin in humans with specific numeric values and confidence intervals. |
| `Delavenne_2025.pdf` | Delavenne X et al., Tinzaparin Pharmacokinetics in Patients…, Thrombosis and haemostasis (2025) | popPK | 10 | [10.1055/a-2740-1841](https://doi.org/10.1055/a-2740-1841) | [41290197](https://pubmed.ncbi.nlm.nih.gov/41290197) | The paper describes a population PK model for tinzaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Kuhle_2005.pdf` | Kuhle S et al., Dose-finding and pharmacokinetics of th…, Thrombosis and haemostasis (2005) | popPK | 10 | [10.1160/TH05-03-0215](https://doi.org/10.1160/TH05-03-0215) | [16411388](https://pubmed.ncbi.nlm.nih.gov/16411388) | The study is a population PK analysis of tinzaparin in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Johansen_1994.pdf` | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | popPK | 9 | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) | [7997983](https://pubmed.ncbi.nlm.nih.gov/7997983) | The study reports quantitative PK parameters (half-lives, accumulation ratios, excretion percentages) for tinzaparin in rats, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| `Brindley_1993.pdf` | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | popPK | 8 | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) | [8212732](https://pubmed.ncbi.nlm.nih.gov/8212732) | The study reports PK/PD modeling of tinzaparin in dogs, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters (EC50). |
| `Hainer_2002.pdf` | Hainer JW et al., Intravenous and subcutaneous weight-bas…, American journal of kidney… (2002) | popPK | 8 | [10.1053/ajkd.2002.34911](https://doi.org/10.1053/ajkd.2002.34911) | [12200805](https://pubmed.ncbi.nlm.nih.gov/12200805) | The study reports quantitative pharmacokinetic parameters (half-life, clearance reduction) for tinzaparin in humans. |

<sub>queue written 2026-10-05T16:46:33.033847+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brindley_1993 | relevant | 8 | 2 | The study reports PK/PD modeling of tinzaparin in dogs, but specific quantitative PK parameters (CL, V, ka) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters (EC50). |
| popPK | Delavenne_2025 | relevant | 10 | 0 | The paper describes a population PK model for tinzaparin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Kuhle_2005 | relevant | 10 | 2 | The study is a population PK analysis of tinzaparin in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 16:46 UTC</sub>
