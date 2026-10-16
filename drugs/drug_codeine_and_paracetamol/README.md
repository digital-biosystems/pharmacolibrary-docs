<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;codeine and paracetamol&quot;}]"></div>

# codeine and paracetamol

- **generic name:** codeine and paracetamol
- **ATC codes:** `N02AJ06`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Co-codamol is a combination of codeine and paracetamol used as a compound analgesic to relieve pain. It is widely used, particularly in the United Kingdom, where it is available on prescription and in lower strengths over the counter.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4357608](https://www.wikidata.org/wiki/Q4357608) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 14:32 | 11:43 | 0/0/0 | 0/0/0 | 0/0/1 | 101,179/5,892 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/2 | 5/1 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Poikola_2025](drugs/drug_codeine_and_paracetamol/pgx_Poikola_2025_CYP2D6_Q100.md) | Poikola S et al., Does cytochrome 2D6 genotype affect the…, Acta anaesthesiologica Scan… (2025) | [10.1111/aas.14549](https://doi.org/10.1111/aas.14549) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=codeine_and_paracetamol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` formation | PGx paper |
| metabolism | liver | `CYP2D6` formation | PGx paper |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 60 matched, 46 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Khan_2018.pdf` | Khan A et al., Prevalence of selected pharmaceuticals…, Environmental monitoring an… (2018) | pd | 4 | [10.1007/s10661-018-6683-6](https://doi.org/10.1007/s10661-018-6683-6) | [29728779](https://www.ncbi.nlm.nih.gov/pubmed/29728779) | metadata signals extractable PD data (EC50) |
| `unknown_2016.pdf` | unknown, "Weak" opioid analgesics. Codeine, dihy…, Prescrire international (2016) | pgx | 8 | not captured | [27042732](https://www.ncbi.nlm.nih.gov/pubmed/27042732) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Vevelstad_2009.pdf` | Vevelstad M et al., O-demethylation of codeine to morphine…, European journal of clinica… (2009) | pgx | 5 | [10.1007/s00228-009-0640-9](https://doi.org/10.1007/s00228-009-0640-9) | [19308365](https://www.ncbi.nlm.nih.gov/pubmed/19308365) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T14:29:49.675133+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lyngstad_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical efficacy trial measuring pain relief outcomes, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for codeine or paracetamol. |
| popPK | Lyngstad_2023 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial assessing analgesic efficacy (pain scores) and does not report pharmacokinetic parameters (CL, V, ka, etc.) for codeine or paracetamol. |
| PD | Lyngstad_2023 | not_relevant | 2 | 0 | The study is a fixed-dose clinical trial comparing different drug combinations; it reports aggregate clinical outcomes (SPI, SPID) but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | McQuay_1998 | irrelevant | 0 | 0 | The paper is a systematic review of analgesic efficacy and safety, not a pharmacokinetic study, and contains no quantitative PK parameters for codeine and paracetamol. |
| PD | McQuay_1998 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials for postoperative analgesia and does not report primary pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for codeine and paracetamol. |
| PGx | Pieczarka_2026 | not_relevant | 2 | 5 | The paper reports an association between CYP2D6 and codeine dose (a prescription proxy), but does not report a pharmacokinetic or pharmacodynamic parameter (e.g., AUC, Cmax, effect magnitude) for codeine_and_paracetamol. |
| popPK | Rodieux_2018 | irrelevant | 0 | 0 | The paper is a review focused on tramadol pharmacokinetics and safety in children, with codeine mentioned only as a comparator or context for regulatory changes, and no quantitative PK parameters for codeine_and_paracetamol are reported. |
| PD | Rodieux_2018 | not_relevant | 1 | 0 | The paper is a review of tramadol prescribing in children and discusses codeine only in the context of safety warnings and CYP2D6 metabolism; it does not report any numeric pharmacodynamic parameters or exposure-response relationships for codeine and paracetamol. |
| PGx | Rodieux_2018 | not_relevant | 0 | 0 | The paper focuses on tramadol pharmacogenetics and safety in children, not codeine_and_paracetamol. |
| popPK | Smith_2001 | irrelevant | 0 | 0 | The paper is a clinical efficacy meta-analysis reporting NNT and pain relief percentages, not a pharmacokinetic study with disposition parameters. |
| popPK | Zhang_1996 | irrelevant | 0 | 0 | The paper is a meta-analysis of analgesic efficacy (pain relief scores) and does not report pharmacokinetic parameters such as clearance or volume. |
| PD | Zhang_1996 | not_relevant | 3 | 2 | The paper is a meta-analysis of clinical trials that explicitly states there was no significant dose-response relationship and does not provide pharmacokinetic data or numeric PD parameters (Emax, EC50) for codeine and paracetamol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
