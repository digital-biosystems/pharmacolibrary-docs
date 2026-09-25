<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;batroxobin&quot;}]"></div>

# batroxobin

- **generic name:** batroxobin
- **ATC codes:** `B02BX03`
- **DrugBank:** [DB09005](https://go.drugbank.com/drugs/DB09005)
- **groups:** investigational

## About

**Description.** Batroxobin is a defibrinogenating hemostatic agent derived from the venom of a pit viper, Bothrops atrox moojeni. In addition to batroxobin, the venom of Bothrops atrox has a composition of 10.2% neutral carbohydrate. Batroxobin is a serine protease, which cleaves the 16 Arginine - 17 Glycine bond in fibrinogen. The MW of batroxobin is approximately 43,000 g/mol-1, and it contains 231 amino acids.

Batroxobin is inactivated by alpha2-macroglobulin, but not anti-thrombin compounds.  Batroxobin will also bind fibrinogen in a manner different than thrombin and with a higher affinity. Once bound to fibrin, it will cause fibrin accretion(clot formation) to a degree 18 folds greater than thrombin. 

Currently use is experimental but trials have been conducted which support certain clinical applications. Recombinant Batroxobin in relatively affordable and could be accessed by mass production.

**Indication.** No approved indications. Batroxobin is a defibrongenating agent which has been observed to reduce fibrinogen levels and thus reduce clot risk when used intravenously.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 19:34 | 0:59 | 0/0/0 | 0/0/0 | 0/0/0 | 11,836/1,025 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/2 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zheng_2013.pdf` | Zheng ZH et al., [Pharmacodynamics and pharmacokinetics…, Yao xue xue bao = Acta phar… (2013) | popPK | 8 | not captured | [24187841](https://pubmed.ncbi.nlm.nih.gov/24187841) | The study reports quantitative PK parameters (t1/2, Cmax, AUC) for batroxobin in Beagle dogs, though it lacks compartmental model parameters like CL or V. |

<sub>queue written 2026-09-18T19:34:14.410209+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Choi_2018 | irrelevant | 1 | 0 | The study reports pharmacodynamic endpoints (fibrinogen, TT) and safety, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for batroxobin. |
| popPK | Clare_2023 | irrelevant | 0 | 0 | The paper is an in-vitro high-throughput screening study for snake venom metalloproteinase inhibitors and does not report pharmacokinetic parameters for batroxobin. |
| popPK | Markwardt_1979 | irrelevant | 0 | 0 | The study uses batroxobin as an inducer of fibrinolysis in rats to test other drugs, and does not report pharmacokinetic parameters for batroxobin itself. |
| popPK | Markwardt_1985 | irrelevant | 2 | 0 | The study focuses on the enzymatic deacylation half-life and qualitative defibrinogenation effects in rats, without reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for batroxobin. |
| popPK | Richter_1988 | irrelevant | 2 | 0 | The study focuses on enzymatic activity and defibrinogenation effects in rats rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for batroxobin. |
| popPK | Stocker_1982 | irrelevant | 0 | 0 | The paper is a mechanistic review of snake venom proteinases and does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for batroxobin. |
| PD | Stocker_1982 | not_relevant | 1 | 0 | The text is a qualitative review of thrombin-like proteinases that mentions dose-response relationships exist but provides no numeric PD parameters, curves, or specific exposure-response data for batroxobin. |
| popPK | Sugai_1986 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for batroxobin. |
| popPK | Surette_2011 | irrelevant | 0 | 0 | The study investigates the role of S100A10 in fibrinolysis using batroxobin only as a tool to induce thrombi, and does not report any pharmacokinetic parameters for batroxobin. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The study uses batroxobin as a tool to induce fibrin deposition for a thrombolysis mechanism study, not to characterize its pharmacokinetic parameters. |
| PD | Wang_2003 | not_relevant | 1 | 0 | The study describes a qualitative interaction between LPS and batroxobin-induced fibrinolysis but does not provide numeric concentration-effect or dose-response parameters for batroxobin itself. |
| popPK | Xie_2022 | irrelevant | 0 | 0 | The paper is a comparative genomics and evolutionary study of snake venom toxins, not a pharmacokinetic study of batroxobin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
