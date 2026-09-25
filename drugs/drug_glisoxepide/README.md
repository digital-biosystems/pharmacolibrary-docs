<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glisoxepide&quot;}]"></div>

# glisoxepide

- **generic name:** glisoxepide
- **ATC codes:** `A10BB11`
- **DrugBank:** [DB01289](https://go.drugbank.com/drugs/DB01289)
- **groups:** investigational

## About

**Description.** Glisoxepide is one of the sulphonamide-derived oral antidiabetic drugs. It inhibits the uptake of bile acids into isolated rat hepatocytes. However it inhibits taurocholate uptake only in the absence of sodium ions. Glisoxepide uptake could be further inhibited by blockers of the hepatocellular monocarboxylate transporter, by the loop diuretic bumetanide, by 4,4'-diisothiocyano-2,2'-stilbenedisulfonate (DIDS) and by sulphate.  These results are consistent with the transport of glisoxepide via the transport system for the unconjugated bile acid cholate. [A31819,A31820]

**Indication.** For the treatment of diabetes mellitus type 2.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 07:53 | 1:38 | 0/0/0 | 1/0/0 | 0/0/0 | 38,440/952 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glisoxepide/pd_Haupt_1971_2_blood_glucose.md) | Haupt (1971) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glisoxepide/pd_Haupt_1971_2_free_fatty_acids.md) | Haupt (1971) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Haupt_1971_2](drugs/drug_glisoxepide/pd_Haupt_1971_2_serum_insulin.md) | Haupt (1971) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glisoxepide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: INS (regulator), KCNJ10 (blocker), KCNJ8 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chandra_2021.pdf` | Chandra A et al., Identification of potential inhibitors…, Journal of biomolecular str… (2021) | pd | 4 | [10.1080/07391102.2020.1775127](https://doi.org/10.1080/07391102.2020.1775127) | [32462970](https://www.ncbi.nlm.nih.gov/pubmed/32462970) | metadata signals extractable PD data (IC50) |
| `Fückel_1992.pdf` | Fückel D et al., Interaction of sulfonylureas with the t…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90628-h](https://doi.org/10.1016/0014-2999(92)90628-h) | [1618280](https://www.ncbi.nlm.nih.gov/pubmed/1618280) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-22T07:52:31.613947+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandra_2021 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| PD | Chandra_2021 | not_relevant | 0 | 0 | The paper focuses on in silico drug repurposing for SARS-CoV-2 EndoU and does not contain any pharmacodynamic or exposure-response data for glisoxepide. |
| popPK | Fückel_1992 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PD | Fückel_1992 | not_relevant | 0 | 0 | The paper focuses on the interaction of sulfonylureas with bile acid transport in hepatocytes and does not report pharmacodynamic or exposure-response data for glisoxepide. |
| popPK | Haupt_1971 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of insulin secretion and blood glucose levels, not a pharmacokinetic study reporting disposition parameters like clearance or volume for glisoxepide. |
| popPK | Haupt_1971_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of dose-response and insulin secretion, not a pharmacokinetic study reporting disposition parameters like clearance or volume for glisoxepide. |
| popPK | Irsigler_1979 | irrelevant | 1 | 0 | The study is a clinical efficacy trial comparing sulfonylureas and explicitly states there was insufficient evidence for pharmacokinetic differential diagnosis, reporting no quantitative PK parameters. |
| PD | Irsigler_1979 | not_relevant | 1 | 0 | The study is a qualitative clinical comparison of sulfonylureas in small patient groups without reporting numeric concentration-effect parameters or a formal PK/PD model. |
| popPK | Kolb_1974 | irrelevant | 0 | 0 | no_text gate: only 69 chars of text extracted (&lt; 400) |
| popPK | Schäfer_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for diabetes treatment and does not report any pharmacokinetic parameters for glisoxepide. |
| PD | Schäfer_1979 | not_relevant | 1 | 0 | The text describes a large clinical trial reporting mean daily doses and qualitative metabolic improvements, but it does not provide any concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Speck_1974 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
