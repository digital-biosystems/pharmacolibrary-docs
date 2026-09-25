<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;etamsylate&quot;}]"></div>

# etamsylate

- **generic name:** etamsylate
- **ATC codes:** `B02BX01`
- **DrugBank:** [DB13483](https://go.drugbank.com/drugs/DB13483)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 21:31 | 2:44 | 0/0/0 | 0/0/0 | 0/0/0 | 48,934/1,893 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Helmy_2013.pdf` | Helmy SA et al., A new and simple HPLC method for determ…, Saudi pharmaceutical journa… (2013) | popPK | 10 | [10.1016/j.jsps.2012.12.001](https://doi.org/10.1016/j.jsps.2012.12.001) | [24227961](https://pubmed.ncbi.nlm.nih.gov/24227961) | The paper describes a PK study for etamsylate and lists parameters, but the specific numeric values are not present in the provided evidence. |
| `Paine_2023.pdf` | Paine SW et al., Novel holistic pharmacokinetic model ap…, Journal of veterinary pharm… (2023) | popPK | 9 | [10.1111/jvp.13387](https://doi.org/10.1111/jvp.13387) | [37255256](https://pubmed.ncbi.nlm.nih.gov/37255256) | The study reports a compartmental PK model for etamsylate (via its metabolite 2,5-HBSA) in horses, but specific numeric parameter values (CL, V, etc.) for etamsylate are not explicitly listed in the provided text, only typical values for the shared metabolite. |
| `Yamboliev_1992.pdf` | Yamboliev I et al., In vitro and in situ absorption of etam…, Die Pharmazie (1992) | popPK | 8 | not captured | [1518887](https://pubmed.ncbi.nlm.nih.gov/1518887) | The study reports quantitative absorption parameters (ka, t1/2) for etamsylate in an in situ animal model, which are readable in the provided text. |

<sub>queue written 2026-09-18T21:31:42.970108+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belal_2011 | irrelevant | 0 | 0 | The paper describes analytical methods for quantifying etamsylate and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Dayrens_1983 | irrelevant | 0 | 0 | The paper is an in-vivo immunological study assessing anti-inflammatory and immunostimulant activities, not a pharmacokinetic study, and contains no PK parameters for etamsylate. |
| popPK | El-Masry_2020 | irrelevant | 2 | 0 | The study focuses on in-vitro release and in-silico prediction of plasma profiles without reporting original quantitative PK parameters (CL, V, etc.) for etamsylate. |
| popPK | Helmy_2013 | relevant | 10 | 0 | The paper describes a PK study for etamsylate and lists parameters, but the specific numeric values are not present in the provided evidence. |
| popPK | Herrería-Bustillo_2023 | irrelevant | 1 | 0 | The study is an in-vitro thromboelastography (TEG) analysis of etamsylate's effect on coagulation, not a pharmacokinetic study, and does not report quantitative disposition parameters like clearance or volume of distribution for etamsylate. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study investigates analytical interference of ethamsylate on creatinine assays, not pharmacokinetic disposition parameters. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper analyzes analytical interference of ethamsylate on creatinine assay methods, not a pharmacodynamic or exposure-response relationship for the drug's biological effect. |
| popPK | Jozsa_1983 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of etamsylate on intraocular pressure and aqueous humor formation, not its pharmacokinetic disposition parameters. |
| popPK | Leminen_2012 | irrelevant | 0 | 0 | The paper is a review of tranexamic acid where etamsylate is only mentioned as a comparator drug, and no pharmacokinetic parameters for etamsylate are reported. |
| PD | Leminen_2012 | not_relevant | 0 | 0 | The paper is a review of tranexamic acid and only mentions etamsylate as a comparator without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for etamsylate. |
| popPK | Nong_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new cinnamic acid derivatives where etamsylate is used only as a comparator for in-vitro coagulation activity, with no pharmacokinetic parameters reported. |
| PD | Nong_2017 | not_relevant | 3 | 2 | The paper reports a single IC50 value for etamsylate in an in vitro platelet aggregation assay for comparison, but does not provide a full concentration-effect curve, dose-response relationship, or PK/PD model parameters (Emax, slope, etc.) for etamsylate. |
| popPK | Paine_2023 | relevant | 9 | 2 | The study reports a compartmental PK model for etamsylate (via its metabolite 2,5-HBSA) in horses, but specific numeric parameter values (CL, V, etc.) for etamsylate are not explicitly listed in the provided text, only typical values for the shared metabolite. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
