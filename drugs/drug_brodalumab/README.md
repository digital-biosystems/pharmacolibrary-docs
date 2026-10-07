<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;brodalumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Brodalumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# brodalumab

- **generic name:** brodalumab
- **ATC codes:** `L04AC12`
- **DrugBank:** [DB11776](https://go.drugbank.com/drugs/DB11776) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Brodalumab is a monoclonal antibody used to treat psoriasis. It is authorised in the European Union for psoriasis and is also under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4972934](https://www.wikidata.org/wiki/Q4972934) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:36 | 0:31 | 1/1/2 | 0/0/1 | 0/0/0 | 51,104/3,086 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rodríguez-Fernández_2022_reference](drugs/drug_brodalumab/Brodalumab_RodrguezFernndez2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Rodríguez-Fernández K et al., Impact of Pharmacokinetic and Pharmacod…, Pharmaceutics (2022) | [10.3390/pharmaceutics14030654](https://doi.org/10.3390/pharmaceutics14030654) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Timmermann_2019_mean](drugs/drug_brodalumab/Brodalumab_Timmermann2019_mean.md) | — | 1-compartment (no model) | 4 | Timmermann S et al., Population pharmacokinetics of brodalum…, Basic & clinical pharmacolo… (2019) | [10.1111/bcpt.13202](https://doi.org/10.1111/bcpt.13202) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q18 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Timmermann_2019_median](drugs/drug_brodalumab/Brodalumab_Timmermann2019_median.md) | — | 1-compartment (no model) | 5 | Timmermann S et al., Population pharmacokinetics of brodalum…, Basic & clinical pharmacolo… (2019) | [10.1111/bcpt.13202](https://doi.org/10.1111/bcpt.13202) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Timmermann_2019_value_rse](drugs/drug_brodalumab/Brodalumab_Timmermann2019_value_rse.md) | — | 2-compartment (no model) | 8 (+3 cov.) | Timmermann S et al., Population pharmacokinetics of brodalum…, Basic & clinical pharmacolo… (2019) | [10.1111/bcpt.13202](https://doi.org/10.1111/bcpt.13202) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Salinger_2014_PASI](drugs/drug_brodalumab/pd_Salinger_2014_PASI.md) | Psoriasis Area and Severity Index ← brodalumab · indirect response — drug inhibits the production of Psoriasis Area and Severity Index | model (no simulator) | Salinger DH et al., A semi-mechanistic model to characteriz…, Clinical pharmacology in dr… (2014) | [10.1002/cpdd.103](https://doi.org/10.1002/cpdd.103) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brodalumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL17A (modulator), IL17RA (inhibitor), IL17RA (target), IL17RB (target), IL17RC (target), IL17RD (target), IL17RE (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Endres_2014.pdf` | Endres CJ et al., Population pharmacokinetics of brodalum…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.334](https://doi.org/10.1002/jcph.334) | [24846347](https://pubmed.ncbi.nlm.nih.gov/24846347) | The abstract provides specific numeric population PK parameter values (CL, V, Vmax, CV, covariate exponents) for brodalumab. |
| `Salinger_2014.pdf` | Salinger DH et al., A semi-mechanistic model to characteriz…, Clinical pharmacology in dr… (2014) | popPK | 5 | [10.1002/cpdd.103](https://doi.org/10.1002/cpdd.103) | [27128833](https://pubmed.ncbi.nlm.nih.gov/27128833) | The paper reports a semi-mechanistic PK-PD model for brodalumab, but the abstract only provides pharmacodynamic parameters (IC50, plaque formation rate) and lacks specific numeric PK disposition values like clearance (CL) or volume (V) which are likely in the main text or supplementary material not provided. |

<sub>queue written 2026-10-06T23:36:10.083935+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Rodríguez-Fernández_2022 | irrelevant | 3 | 1 | The paper is a review of mAbs in psoriasis that mentions brodalumab, but it does not provide specific quantitative population PK parameters (CL, V, etc.) for brodalumab in the provided text; the detailed values are likely in Table 3 which is not included in the evidence. |
| popPK | Salinger_2014 | relevant | 5 | 0 | The paper reports a semi-mechanistic PK-PD model for brodalumab, but the abstract only provides pharmacodynamic parameters (IC50, plaque formation rate) and lacks specific numeric PK disposition values like clearance (CL) or volume (V) which are likely in the main text or supplementary material not provided. |
| popPK | Schwagerle_2026 | irrelevant | 3 | 0 | This is a preclinical study in pigs using brodalumab to validate a model for predicting human bioavailability, rather than a report of quantitative population PK parameters (CL, V, t1/2) for brodalumab in a target species. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:36 UTC</sub>
