<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;etilefrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Etilefrine_Hengstmann1975_reference&quot;,&quot;label&quot;:&quot;Hengstmann_1975_reference&quot;,&quot;href&quot;:&quot;drugs/drug_etilefrine/Etilefrine_Hengstmann1975_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# etilefrine

- **generic name:** etilefrine
- **ATC codes:** `C01CA01`
- **DrugBank:** [DB08985](https://go.drugbank.com/drugs/DB08985)
- **groups:** approved, withdrawn

## About

**Description.** Etilefrine is an adrenergic agonist that appears to interact with beta-1 and some alpha-adrenergic receptors. It has been used as a vasoconstrictor agent.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 18:11 | 3:02 | 0/1/0 | 0/0/0 | 0/0/0 | 18,976/9,338 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hengstmann_1975_reference](drugs/drug_etilefrine/Etilefrine_Hengstmann1975_reference.md) | Hengstmann JH et al., The physiological disposition of etilef…, European journal of clinica… (1975) | [10.1007/BF00614015](https://doi.org/10.1007/BF00614015) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hengstmann_1975.pdf` | Hengstmann JH et al., The physiological disposition of etilef…, European journal of clinica… (1975) | popPK | 10 | [10.1007/BF00614015](https://doi.org/10.1007/BF00614015) | [9300](https://pubmed.ncbi.nlm.nih.gov/9300) | The paper reports quantitative PK parameters for etilefrine including a 2-compartment model, volume of distribution (160 L), and half-life (2 hours). |

<sub>queue written 2026-09-20T18:08:16.686364+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Badr_2017 | not_relevant | 0 | 0 | The paper describes a spectrofluorimetric analytical method for quantifying drug concentration in formulations, not a pharmacodynamic or exposure-response relationship. |
| PD | Bakry_1995 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying etilefrine, not a pharmacodynamic or exposure-response study. |
| PD | Coleman_1975 | not_relevant | 3 | 2 | The text provides only qualitative descriptions of dose-dependent effects (e.g., PVR falls at 1-8 mg, rises at higher doses) without reporting specific numeric PD parameters (Emax, EC50) or quantitative concentration-effect curves. |
| PD | Hassen_2022 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (bioavailability comparison) and in vitro dissolution/texture data; it does not measure any pharmacodynamic effect or report exposure-response/dose-response relationships. |
| PD | McTavish_1989 | not_relevant | 0 | 0 | The text is a review of midodrine and only qualitatively mentions etilefrine as a comparator without providing any numeric PD parameters or exposure-response data for etilefrine. |
| PD | Onishi_2018 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetic absorption and bioavailability after buccal administration, reporting no pharmacodynamic effects or exposure-response relationships. |
| PD | Onishi_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics (plasma concentration-time profile) of etilefrine films, reporting no pharmacodynamic or exposure-response relationship. |
| PD | Otaif_2023 | not_relevant | 0 | 0 | The paper describes an electrochemical analytical method for detecting etilefrine concentration, not a pharmacodynamic or exposure-response study. |
| PD | Raviele_1999 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial reporting binary outcomes (syncope recurrence) and does not contain any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Sakata_2020 | not_relevant | 0 | 0 | The paper focuses on the formulation and pharmacokinetics (absorption/plasma levels) of etilefrine buccal tablets, but does not report any pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper describes the chemical synthesis of metabolites for future analytical studies and does not report any pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-20 18:08 UTC</sub>
