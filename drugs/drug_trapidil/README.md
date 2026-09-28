<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;trapidil&quot;}]"></div>

# trapidil

- **generic name:** trapidil
- **ATC codes:** `C01DX11`
- **DrugBank:** [DB09283](https://go.drugbank.com/drugs/DB09283) · **PubChem:** [CID 5531](https://pubchem.ncbi.nlm.nih.gov/compound/5531)
- **molar mass:** 205.265 g/mol (C10H15N5) — DrugBank
- **groups:** experimental

## About

**Description.** Trapidil, a platelet-derived growth factor antagonist, was originally developed as a vasodilator and anti-platelet agent and has been used to treat patients with ischemic coronary heart, liver, and kidney disease.

**Indication.** Used in the treatment of chronic stable angina [A19770].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 15:51 | 5:04 | 0/0/0 | 0/0/0 | 0/0/0 | 38,050/2,745 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 2/1 | 1/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trapidil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FGFR3 (inhibitor), PDE4A (inhibitor), PDGFRB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Berndt_1992.pdf` | Berndt A et al., Pharmacokinetics of trapidil (Rocornal)…, International journal of cl… (1992) | popPK | 10 | not captured | [1490801](https://pubmed.ncbi.nlm.nih.gov/1490801) | The text explicitly reports quantitative pharmacokinetic parameters for trapidil, including total plasma clearance (99.6 ml/min) and volume of distribution (19.9 l) in patients with liver disease. |
| `Berndt_1996.pdf` | Berndt A et al., Pharmacokinetics of trapidil in patient…, Journal of clinical pharmac… (1996) | popPK | 9 | [10.1002/j.1552-4604.1996.tb04756.x](https://doi.org/10.1002/j.1552-4604.1996.tb04756.x) | [8930776](https://pubmed.ncbi.nlm.nih.gov/8930776) | The study reports quantitative pharmacokinetic parameters for trapidil, specifically total plasma clearance values for patients and healthy controls, which are explicitly stated in the text. |
| `Harder_1996.pdf` | Harder S et al., Pharmacokinetics of trapidil, an antago…, British journal of clinical… (1996) | popPK | 8 | [10.1046/j.1365-2125.1996.04338.x](https://doi.org/10.1046/j.1365-2125.1996.04338.x) | [8904615](https://pubmed.ncbi.nlm.nih.gov/8904615) | The paper reports quantitative PK parameters (AUC, half-life) for trapidil, but lacks explicit values for clearance (CL) and volume of distribution (V). |
| `Thürmann_1997.pdf` | Thürmann PA et al., Pharmacokinetics of the PDGF-antagonist…, Clinical nephrology (1997) | popPK | 8 | not captured | [9049457](https://pubmed.ncbi.nlm.nih.gov/9049457) | The study reports quantitative PK parameters (Cmax, AUC) for trapidil in humans, but lacks explicit clearance (CL) or volume (V) values, which are typically derived from these metrics or reported in tables not fully detailed in the text. |
| `Bethke_1991.pdf` | Bethke T et al., Effects of the triazolopyrimidine trapi…, Arzneimittel-Forschung (1991) | pd | 4 | not captured | [1716891](https://www.ncbi.nlm.nih.gov/pubmed/1716891) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-27T15:50:40.403256+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | An_2018 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of Short QT Syndrome where trapidil is used as a tool compound to induce a model, not as the subject of pharmacokinetic analysis. |
| popPK | Bartel_1985 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition data (IC50) for trapidil derivatives, not pharmacokinetic disposition parameters. |
| popPK | Bethke_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (inotropy and PDE inhibition) in guinea-pig hearts, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Block_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function and does not report any pharmacokinetic parameters for trapidil. |
| popPK | Jargin_2012 | irrelevant | 0 | 0 | The paper is a critical review of in-vitro cell culture studies regarding atherosclerosis and does not report any pharmacokinetic parameters for trapidil. |
| popPK | Kohno_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding trapidil pharmacokinetics. |
| popPK | Maruyama_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of trapidil's effects on tracheal musculature and vasculature in dogs, reporting no pharmacokinetic parameters. |
| popPK | Peterson_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on fibroproliferation where trapidil is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | Sziegoleit_2007 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of hand vein compliance and norepinephrine ED50 values, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for trapidil. |
| popPK | Ujiie_1983 | irrelevant | 0 | 0 | The study focuses on the in-vitro platelet aggregation inhibitory effects of etafenone, with trapidil serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Yoshikawa_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic and electrophysiological investigation of isolated rabbit atria, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
