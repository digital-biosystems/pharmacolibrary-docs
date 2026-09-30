<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;bendroflumethiazide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bendroflumethiazide_Vergin1986_reference&quot;,&quot;label&quot;:&quot;Vergin_1986_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bendroflumethiazide/Bendroflumethiazide_Vergin1986_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bendroflumethiazide_Borgstrm1981_reference&quot;,&quot;label&quot;:&quot;Borgstr\u00f6m_1981_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bendroflumethiazide/Bendroflumethiazide_Borgstrm1981_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bendroflumethiazide_SchferKorting1985_reference&quot;,&quot;label&quot;:&quot;Sch\u00e4fer-Korting_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_bendroflumethiazide/Bendroflumethiazide_SchferKorting1985_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# bendroflumethiazide

- **generic name:** bendroflumethiazide
- **ATC codes:** `C03AA01`, `C03AB01`, `C03EA13`
- **DrugBank:** [DB00436](https://go.drugbank.com/drugs/DB00436) · **PubChem:** [CID 2315](https://pubchem.ncbi.nlm.nih.gov/compound/2315)
- **molar mass:** 421.415 g/mol (C15H14F3N3O4S2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A thiazide diuretic with actions and uses similar to those of hydrochlorothiazide. It has been used in the treatment of familial hyperkalemia, hypertension, edema, and urinary tract disorders. (From Martindale, The Extra Pharmacopoeia, 30th ed, p810)

**Indication.** For the treatment of high blood pressure and management of edema related to heart failure.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bendroflumethiazide | parent | 421.415 | C15H14F3N3O4S2 | DrugBank | [2315](https://pubchem.ncbi.nlm.nih.gov/compound/2315) | Borgström_1981, Schäfer-Korting_1985, Vergin_1986 |
| canrenone | metabolite | 340.463 | C22H28O3 | PubChem | [13789](https://pubchem.ncbi.nlm.nih.gov/compound/13789) | Vergin_1986 |
| spironolactone | metabolite | 416.576 | C24H32O4S | PubChem | [5833](https://pubchem.ncbi.nlm.nih.gov/compound/5833) | Vergin_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 13:49 | 4:22 | 0/2/1 | 0/0/0 | 0/0/0 | 21,141/12,907 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Vergin_1986_reference](drugs/drug_bendroflumethiazide/Bendroflumethiazide_Vergin1986_reference.md) | — | parent + metabolite (no model) | 2 | Vergin H et al., [Pharmacokinetic studies and bioavailab…, Arzneimittel-Forschung (1986) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Borgström_1981_reference](drugs/drug_bendroflumethiazide/Bendroflumethiazide_Borgstrm1981_reference.md) | — | 1-compartment (no model) | 2 | Borgström L et al., Pharmacokinetics of bendroflumethiazide…, Journal of pharmacokinetics… (1981) | [10.1007/BF01060887](https://doi.org/10.1007/BF01060887) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Schäfer-Korting_1985_reference](drugs/drug_bendroflumethiazide/Bendroflumethiazide_SchferKorting1985_reference.md) | — | 1-compartment (no model) | 2 | Schäfer-Korting M, Skin blister fluid--an access to the pe…, Arzneimittel-Forschung (1985) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bendroflumethiazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `TPMT` inhibitor | DrugBank actor |
| metabolism | liver | `TPMT` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CA1 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), KCNMA1 (inducer), SLC12A1 (blocker), SLC12A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 17 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Borgström_1981.pdf` | Borgström L et al., Pharmacokinetics of bendroflumethiazide…, Journal of pharmacokinetics… (1981) | popPK | 10 | [10.1007/BF01060887](https://doi.org/10.1007/BF01060887) | [7310642](https://pubmed.ncbi.nlm.nih.gov/7310642) | The study reports quantitative PK parameters including half-lives (3.1 hr, 8.9 hr) and renal clearance (~30 ml/min) for bendroflumethiazide in the provided text. |
| `Vergin_1986.pdf` | Vergin H et al., [Pharmacokinetic studies and bioavailab…, Arzneimittel-Forschung (1986) | popPK | 10 | not captured | [3707669](https://pubmed.ncbi.nlm.nih.gov/3707669) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, volume of distribution, and clearance) for bendroflumethiazide derived from a 2-compartment model. |
| `Schäfer-Korting_1985.pdf` | Schäfer-Korting M, Skin blister fluid--an access to the pe…, Arzneimittel-Forschung (1985) | popPK | 9 | not captured | [4096738](https://pubmed.ncbi.nlm.nih.gov/4096738) | The study reports quantitative pharmacokinetic parameters (half-lives, compartmental model description) for bendroflumethiazide in rats, with specific numeric values present in the text. |

<sub>queue written 2026-09-29T13:45:02.704434+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bulpitt_1994 | not_relevant | 0 | 0 | The text is a protocol/rationale for a clinical trial describing design and dosing, but it does not report any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for bendroflumethiazide. |
| PD | Busby_2018 | not_relevant | 1 | 0 | The paper is a pharmacoepidemiological study reporting odds ratios for breast cancer risk based on prescription data, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| PD | Hallin_1983 | not_relevant | 1 | 0 | The paper reports mean blood pressure reductions for fixed doses but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Hegbrant_1989 | not_relevant | 1 | 0 | The paper reports clinical efficacy (blood pressure reduction and normotension rates) for fixed doses but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| PD | Thorstensen_2022 | not_relevant | 0 | 0 | The paper is a method development study for quantifying drug concentrations in serum and reports PK variability (Cmax/Cmin) but contains no pharmacodynamic or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 03:10 UTC</sub>
