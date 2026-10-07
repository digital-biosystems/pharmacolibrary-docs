<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;sulfanilamide&quot;}]"></div>

# sulfanilamide

- **generic name:** sulfanilamide
- **ATC codes:** `D06BA05`, `J01EB06`
- **DrugBank:** [DB00259](https://go.drugbank.com/drugs/DB00259) · **PubChem:** [CID 5333](https://pubchem.ncbi.nlm.nih.gov/compound/5333)
- **molar mass:** 172.205 g/mol (C6H8N2O2S) — DrugBank
- **groups:** approved, withdrawn

## About

Sulfanilamide is an antibiotic sulfonamide that was used to treat bacterial infections, including vulvovaginal candidiasis. It is no longer in general use, having been withdrawn, though it remains approved for topical dermatological use in some settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423423](https://www.wikidata.org/wiki/Q423423) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:59 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 67,897/1,214 | einfracz / qwen3.8-27b | 7 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nagwekar_1982.pdf` | Nagwekar JB et al., Effects of phenobarbital on the distrib…, Journal of pharmaceutical s… (1982) | popPK | 9 | [10.1002/jps.2600710412](https://doi.org/10.1002/jps.2600710412) | [7086650](https://pubmed.ncbi.nlm.nih.gov/7086650) | The paper describes a pharmacokinetic study of sulfanilamide in rats, but the evidence provided contains only qualitative descriptions of the models and comparisons, with no specific numeric values for parameters like CL, V, or half-life. |

<sub>queue written 2026-10-07T21:58:54.927957+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bai_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro antibacterial activity of coumarin derivatives, not a pharmacokinetic study of sulfanilamide. |
| popPK | Bortnick_2019 | irrelevant | 0 | 0 | The study investigates the association between mineral metabolism biomarkers (FGF-23, phosphate) and valvular calcification, and does not involve sulfanilamide pharmacokinetics. |
| popPK | Bortnick_2022 | irrelevant | 0 | 0 | The paper investigates the association between HDL cholesterol and aortic valve calcification in the Multi-Ethnic Study of Atherosclerosis, with no mention of sulfanilamide or pharmacokinetic parameters. |
| popPK | Dankwa_2026 | irrelevant | 0 | 0 | The paper is a clinical study of aortic valved conduits and contains no pharmacokinetic data for sulfanilamide. |
| popPK | Fashanu_2020 | irrelevant | 0 | 0 | The paper studies valvular calcification and heart failure in the MESA cohort and contains no pharmacokinetic data for sulfanilamide. |
| popPK | He_2025 | irrelevant | 0 | 0 | The study focuses on the biocontrol of apple Valsa canker by the fungus-derived substance altenusin and does not involve sulfanilamide or its pharmacokinetics. |
| popPK | He_2025_2 | irrelevant | 0 | 0 | The paper reports on the antifungal activity of chaetoglobosin D against Cytospora mali, which is unrelated to the pharmacokinetics of sulfanilamide. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The study investigates the association between aortic valve calcification and coronary atherosclerotic plaque volume progression in a human registry and contains no pharmacokinetic data for sulfanilamide. |
| popPK | Massera_2021 | irrelevant | 0 | 0 | The paper investigates the association between bone mineral density and cardiac valve calcification and contains no pharmacokinetic data for sulfanilamide. |
| popPK | Nagwekar_1982 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of sulfanilamide in rats, but the evidence provided contains only qualitative descriptions of the models and comparisons, with no specific numeric values for parameters like CL, V, or half-life. |
| popPK | Rigas_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chloroquinoxaline sulfonamide (CQS), a different drug, not sulfanilamide. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The paper studies the association between sex hormones and aortic calcification and does not involve sulfanilamide pharmacokinetics. |
| popPK | Thiele-Bruhn_2005 | irrelevant | 0 | 0 | The study investigates the ecological/microbial effects of sulfanilamide in soil using dose-response models, not its pharmacokinetic disposition (CL, V, etc.). |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper investigates the antifungal activity of alkaloids from a plant species against plant pathogens and does not involve sulfanilamide or pharmacokinetics. |
| popPK | Xie_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel sulfonamide derivatives as plant bactericides, reporting in vitro antibacterial potency (EC50) and mechanism of action, but containing no pharmacokinetic data for sulfanilamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
