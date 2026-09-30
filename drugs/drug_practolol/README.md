<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;practolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Practolol_Barber1971_reference&quot;,&quot;label&quot;:&quot;Barber_1971_reference&quot;,&quot;href&quot;:&quot;drugs/drug_practolol/Practolol_Barber1971_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# practolol

- **generic name:** practolol
- **ATC codes:** `C07AB01`
- **DrugBank:** [DB01297](https://go.drugbank.com/drugs/DB01297) · **PubChem:** [CID 4883](https://pubchem.ncbi.nlm.nih.gov/compound/4883)
- **molar mass:** 266.3361 g/mol (C14H22N2O3) — DrugBank
- **groups:** approved

## About

**Description.** A beta-adrenergic antagonist that has been used in the emergency treatment of cardiac arrhythmias.

**Indication.** Used in the emergency treatment of cardiac arrhythmias.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 06:15 | 6:28 | 0/1/0 | 0/0/0 | 0/0/0 | 15,560/2,751 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Barber_1971_reference](drugs/drug_practolol/Practolol_Barber1971_reference.md) | — | 1-compartment (no model) | 0 | Barber HE et al., Distribution kinetics and intestinal ab…, British journal of pharmaco… (1971) | [10.1111/j.1476-5381.1971.tb08049.x](https://doi.org/10.1111/j.1476-5381.1971.tb08049.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=practolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barber_1971.pdf` | Barber HE et al., Distribution kinetics and intestinal ab…, British journal of pharmaco… (1971) | popPK | 10 | [10.1111/j.1476-5381.1971.tb08049.x](https://doi.org/10.1111/j.1476-5381.1971.tb08049.x) | [4396971](https://pubmed.ncbi.nlm.nih.gov/4396971) | The paper reports quantitative pharmacokinetic parameters for practolol in rats, including half-lives (0.5 min, 13.3 min) and absorption rate constant (0.03 min^-1), though specific clearance and volume values are not explicitly listed in the text. |
| `Maroto_1992.pdf` | Maroto R et al., Alpha- and beta-adrenoceptor cross-talk…, Archives internationales de… (1992) | pd | 4 | not captured | [1360790](https://www.ncbi.nlm.nih.gov/pubmed/1360790) | metadata signals extractable PD data (EC50) |
| `Setchenska_1986.pdf` | Setchenska MS et al., Classification of beta-adrenergic subty…, Biochemical pharmacology (1986) | pd | 4 | [10.1016/0006-2952(86)90651-9](https://doi.org/10.1016/0006-2952(86)90651-9) | [2877667](https://www.ncbi.nlm.nih.gov/pubmed/2877667) | metadata signals extractable PD data (EC50) |
| `Turner_1980.pdf` | Turner CW et al., The effect of thyroid dysfunction on th…, European journal of pharmac… (1980) | pd | 4 | [10.1016/0014-2999(80)90527-0](https://doi.org/10.1016/0014-2999(80)90527-0) | [6110545](https://www.ncbi.nlm.nih.gov/pubmed/6110545) | metadata signals extractable PD data (Emax) |
| `Wilson_1984.pdf` | Wilson C et al., The rat lipolytic beta-adrenoceptor: st…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90007-4](https://doi.org/10.1016/0014-2999(84)90007-4) | [6145597](https://www.ncbi.nlm.nih.gov/pubmed/6145597) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T06:13:32.282826+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brown_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of milrinone's inotropic effects, using practolol only as a beta-blocker antagonist, and reports no pharmacokinetic parameters for practolol. |
| PD | Brown_1986 | not_relevant | 0 | 0 | The paper reports PD parameters for milrinone, not practolol; practolol is used only as a beta-blocker antagonist in the experimental setup. |
| popPK | Brown_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of dopamine mechanisms in guinea-pig tissues where practolol is used only as a beta-blocker antagonist, not as the subject of a pharmacokinetic analysis. |
| PD | Brown_1990 | not_relevant | 0 | 0 | The paper investigates the mechanisms of dopamine's action in isolated tissues and mentions practolol only as a noncompetitive antagonist used to characterize receptor involvement, without reporting any exposure-response or dose-response relationship for practolol itself. |
| PGx | El-Armouche_2009 | not_relevant | 0 | 0 | The paper is a review of beta-adrenergic signaling and heart failure mechanisms, not a study reporting specific pharmacogenomic effects on practolol PK/PD parameters. |
| popPK | Kimura_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of higenamine's cardiac effects where practolol is used only as a beta-blocker antagonist, with no pharmacokinetic parameters reported. |
| PD | Kimura_1994 | not_relevant | 3 | 2 | The paper reports a qualitative antagonism of higenamine by practolol over a concentration range (10 nM-3 microM) but does not provide numeric PD parameters (e.g., pA2, Ki, or IC50) for practolol itself. |
| popPK | Louis_1982 | irrelevant | 0 | 0 | The study is a pharmacological investigation of anticonvulsant effects in rats and does not report any pharmacokinetic parameters for practolol. |
| popPK | Luck_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adrenoceptor subtypes in bovine cells where practolol is used only as a pharmacological tool, not as a subject for PK analysis. |
| PD | Luck_1991 | not_relevant | 0 | 0 | The paper reports concentration-response data for catecholamines (adrenaline, noradrenaline, salbutamol) but only provides qualitative descriptions of practolol's poor blocking effect without numeric PD parameters or a defined dose-response curve for practolol itself. |
| popPK | Maroto_1992 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| PD | Maroto_1992 | not_relevant | 0 | 0 | The paper focuses on adrenoceptor cross-talk in liver glycogenolysis and does not report pharmacokinetic or pharmacodynamic modeling for practolol. |
| popPK | Setchenska_1986 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| PD | Setchenska_1986 | not_relevant | 0 | 0 | The paper focuses on the classification of beta-adrenergic subtypes in rabbit bone marrow erythroblasts and does not report pharmacodynamic or exposure-response data for practolol. |
| popPK | Steinberg_1984 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study where practolol is used only as a competitive antagonist to determine subselectivity, not as a subject drug for pharmacokinetic analysis. |
| PD | Steinberg_1984 | not_relevant | 0 | 0 | The paper reports receptor binding kinetics and affinity constants (Kd, Bmax) for beta-adrenoceptors, not a pharmacodynamic exposure-response or dose-response relationship for practolol. |
| popPK | Turner_1980 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Turner_1980 | not_relevant | 0 | 0 | The paper focuses on the chronotropic response to noradrenaline in thyroid dysfunction and does not report pharmacodynamic or exposure-response data for practolol. |
| popPK | Wilson_1984 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Wilson_1984 | not_relevant | 0 | 0 | The paper focuses on beta-adrenoceptor agonists in rat lipolysis and does not mention practolol or report any exposure-response or dose-response data for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 06:13 UTC</sub>
