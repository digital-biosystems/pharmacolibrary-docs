<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;calcium levofolinate&quot;}]"></div>

# calcium levofolinate

- **generic name:** calcium levofolinate
- **ATC codes:** `V03AF04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Calcium levofolinate (levoleucovorin calcium) is a detoxifying agent used to protect against the harmful effects of antineoplastic (cancer chemotherapy) treatment. It is classified in the ATC system under detoxifying agents for antineoplastic treatment, indicating it remains in therapeutic use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q11349901](https://www.wikidata.org/wiki/Q11349901) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:31 | 1:00 | 0/0/0 | 0/0/0 | 0/0/0 | 25,945/907 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zittoun_1993.pdf` | Zittoun J et al., Pharmacokinetic comparison of leucovori…, European journal of clinica… (1993) | popPK | 7 | [10.1007/BF02440861](https://doi.org/10.1007/BF02440861) | [8405015](https://pubmed.ncbi.nlm.nih.gov/8405015) | PK study of l-leucovorin (calcium levofolinate) in humans with clearance and volume estimates mentioned, but no numeric values are present in the evidence. |
| `Qiu_2023.pdf` | Qiu B et al., Three-Period Bioequivalence Study of So…, Clinical pharmacology in dr… (2023) | popPK | 6 | [10.1002/cpdd.1223](https://doi.org/10.1002/cpdd.1223) | [36808267](https://pubmed.ncbi.nlm.nih.gov/36808267) | Calcium levofolinate is dosed as a reference in a human bioequivalence study with PK parameters (Cmax, AUC, t½) reported, but the abstract gives no numeric values, which likely reside in tables/figures not provided. |

<sub>queue written 2026-10-07T18:31:39.334757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bajetta_1995 | irrelevant | 0 | 0 | PK modeling concerns doxifluridine/5-FU; leucovorin is only co-administered, with no quantitative disposition parameters for calcium levofolinate. |
| popPK | Chuang_2012 | irrelevant | 2 | 0 | A narrative review of levoleucovorin efficacy/safety/cost with no quantitative PK parameters (CL, V, half-life) reported in the evidence. |
| popPK | Komatsu_2014 | irrelevant | 0 | 0 | PK parameters are for efatutazone (and SN-38), not calcium levofolinate, which is only a co-administered FOLFIRI component with no disposition parameters reported. |
| popPK | Qiu_2023 | relevant | 6 | 3 | Calcium levofolinate is dosed as a reference in a human bioequivalence study with PK parameters (Cmax, AUC, t½) reported, but the abstract gives no numeric values, which likely reside in tables/figures not provided. |
| popPK | Sunakawa_2022 | irrelevant | 0 | 0 | This is a clinical trial of FOLFOXIRI plus bevacizumab with ctDNA biomarker analysis; levofolinate is only a co-administered regimen component and no PK parameters for it are reported. |
| popPK | Yoshino_2013 | irrelevant | 1 | 0 | Levofolinate is only a co-administered FOLFIRI component; all PK parameters (CL, AUC, t1/2) are for aflibercept, irinotecan, and 5-FU, with no levofolinate disposition data. |
| popPK | Yoshino_2015 | irrelevant | 2 | 1 | Levofolinate is only a co-administered FOLFIRI component; PK reported is for ramucirumab, with no levofolinate disposition parameters in the evidence. |
| popPK | Zampino_1999 | irrelevant | 1 | 0 | Calcium levofolinate (leucovorin) is only a co-administered modulator; PK parameters are reported for doxifluridine and 5-FU, not for levofolinate. |
| popPK | Zittoun_1993 | relevant | 7 | 2 | PK study of l-leucovorin (calcium levofolinate) in humans with clearance and volume estimates mentioned, but no numeric values are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
