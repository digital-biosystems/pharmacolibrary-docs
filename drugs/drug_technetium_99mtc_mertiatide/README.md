<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09C&quot;,&quot;href&quot;:&quot;atc/V09C.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) mertiatide&quot;}]"></div>

# technetium (99mTc) mertiatide

- **generic name:** technetium (99mTc) mertiatide
- **ATC codes:** `V09CA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Technetium-99m mertiatide is a diagnostic radiopharmaceutical used for imaging of the kidneys. It is classified for renal system diagnostics and remains an established imaging agent.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| technetium_99mtc_mertiatide | metabolite | 417.207 | C8H8N3Na2O6STc | PubChem | [168313563](https://pubchem.ncbi.nlm.nih.gov/compound/168313563) | Peters_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:08 | 3:09 | 0/1/0 | 0/0/0 | 0/0/0 | 28,058/9,881 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Peters_1994_reference](drugs/drug_technetium_99mtc_mertiatide/Technetium99mtcMertiatide_Peters1994_reference.md) | — | 1-compartment (no model) | 2 | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 359 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peters_1994.pdf` | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | popPK | 9 | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) | [8170640](https://pubmed.ncbi.nlm.nih.gov/8170640) | MAG3 has a reported numerical plasma clearance in the evidence. |
| `Piepsz_1994.pdf` | Piepsz A et al., Improving the accuracy of 99Tcm-mercapt…, Nuclear medicine communicat… (1994) | popPK | 9 | [10.1097/00006231-199407000-00006](https://doi.org/10.1097/00006231-199407000-00006) | [7970429](https://pubmed.ncbi.nlm.nih.gov/7970429) | The study models MAG3 clearance, but reports sample times and estimation errors rather than numeric clearance parameter values. |
| `Russell_1995.pdf` | Russell CD et al., Comparison of single-injection multisam…, Journal of nuclear medicine… (1995) | popPK | 8 | not captured | [7699449](https://pubmed.ncbi.nlm.nih.gov/7699449) | Human renal-clearance methods are compared, but only the difference between methods is reported, not the MAG3 clearance values themselves. |

<sub>queue written 2026-10-07T19:07:21.887388+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beyer-Enke_1991 | irrelevant | 1 | 0 | Technetium-99m-MAG3 is a comparator, and no numeric disposition parameter values are reported. |
| popPK | Boss_2006 | irrelevant | 0 | 0 | This pediatric imaging study uses gadolinium and only compares results with MAG3 scintigraphy, reporting no mertiatide pharmacokinetic parameters. |
| popPK | Cayir_2016 | irrelevant | 1 | 0 | Technetium-99m mertiatide is used as a diagnostic agent, and no numeric disposition parameters are reported. |
| popPK | Dubovsky_1988 | irrelevant | 0 | 0 | This is a review of renal-transplant imaging and reports no quantitative pharmacokinetic parameter values. |
| popPK | Eshima_1990 | irrelevant | 2 | 0 | This is a review reporting only relative plasma clearance, with no numeric disposition parameter values. |
| popPK | Faure_2016 | irrelevant | 0 | 0 | This pediatric renography study reports urinary drainage and renal-function outcomes, not pharmacokinetic disposition parameters for technetium-99m mertiatide. |
| popPK | Ismaili_2005 | irrelevant | 0 | 0 | MAG3 is used as a diagnostic renogram; the reported values are renal-function measures, not its pharmacokinetic parameters. |
| popPK | Marboeuf_2010 | irrelevant | 0 | 0 | Technetium-99m MAG3 is used for renal scintigraphy, with no pharmacokinetic disposition parameters reported. |
| popPK | Piepsz_1994 | relevant | 9 | 2 | The study models MAG3 clearance, but reports sample times and estimation errors rather than numeric clearance parameter values. |
| popPK | Reiners_1993 | irrelevant | 0 | 0 | This clinical diagnostic review gives no quantitative pharmacokinetic disposition parameters for technetium-99m mertiatide. |
| popPK | Rossleigh_2001 | irrelevant | 0 | 0 | This review discusses diagnostic imaging in children and reports no quantitative pharmacokinetic parameters. |
| popPK | Russell_1995 | relevant | 8 | 3 | Human renal-clearance methods are compared, but only the difference between methods is reported, not the MAG3 clearance values themselves. |
| popPK | Szabo_2011 | irrelevant | 0 | 0 | This is a review that mentions Tc99m MAG3 but reports no quantitative disposition parameters. |
| popPK | Thorson_1992 | irrelevant | 0 | 0 | This is a kit-stability study with no quantitative pharmacokinetic disposition parameters. |
| popPK | Verdera_1994 | irrelevant | 1 | 0 | MAG3 is only a comparator, and no numeric disposition parameter values for it are provided. |
| popPK | Vranken_2005 | irrelevant | 0 | 0 | Technetium-99m MAG3 is used as a diagnostic tracer, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Weber_1990 | irrelevant | 0 | 0 | This is a mouse study of a radiolabeled antibody conjugate, not technetium_99mtc_mertiatide, and reports no quantitative PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:07 UTC</sub>
