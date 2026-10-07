<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nadolol&quot;}]"></div>

# nadolol

- **generic name:** nadolol
- **ATC codes:** `C07AA12`, `C07BA12`
- **DrugBank:** [DB01203](https://go.drugbank.com/drugs/DB01203) · **PubChem:** [CID 39147](https://pubchem.ncbi.nlm.nih.gov/compound/39147)
- **molar mass:** 309.4006 g/mol (C17H27NO4) — DrugBank
- **groups:** approved, investigational

## About

Nadolol is a non-selective beta blocker used to treat high blood pressure, angina, and other heart conditions such as long QT syndrome. It is an approved medicine, used mainly in cardiovascular care, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424952](https://www.wikidata.org/wiki/Q424952) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nadolol | parent | 309.401 | C17H27NO4 | DrugBank | [39147](https://pubchem.ncbi.nlm.nih.gov/compound/39147) | Mehta_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:25 | 1:19 | 0/1/0 | 0/0/0 | 0/0/0 | 50,088/1,303 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mehta_1992_reference](drugs/drug_nadolol/Nadolol_Mehta1992_reference.md) | — | 1-compartment (no model) | 1 | Mehta AV et al., Pharmacokinetics of nadolol in children…, Journal of clinical pharmac… (1992) | [10.1002/j.1552-4604.1992.tb03805.x](https://doi.org/10.1002/j.1552-4604.1992.tb03805.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nadolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ORM1` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), POU2F1 (substrate), POU2F2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mehta_1992.pdf` | Mehta AV et al., Pharmacokinetics of nadolol in children…, Journal of clinical pharmac… (1992) | popPK | 9 | [10.1002/j.1552-4604.1992.tb03805.x](https://doi.org/10.1002/j.1552-4604.1992.tb03805.x) | [1474163](https://pubmed.ncbi.nlm.nih.gov/1474163) | The study reports quantitative pharmacokinetic parameters (half-lives for distribution and elimination) for nadolol in children, though specific values for clearance or volume are not explicitly listed in the provided text. |
| `Tan_2021.pdf` | Tan HJ et al., Oral epigallocatechin gallate reduces i…, Phytomedicine : internation… (2021) | popPK | 8 | [10.1016/j.phymed.2021.153623](https://doi.org/10.1016/j.phymed.2021.153623) | [34303263](https://pubmed.ncbi.nlm.nih.gov/34303263) | The study reports quantitative PK parameters (Cmax, AUC, clearance) for nadolol in rats, but specific numeric values are not present in the provided text, only percentage changes and fold-changes. |

<sub>queue written 2026-10-07T00:24:56.519049+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelmawla_2001_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor subtypes using nadolol as a non-selective antagonist, and it does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for nadolol. |
| popPK | Imbrogno_2006 | irrelevant | 0 | 0 | Nadolol is used only as a non-specific beta-blocker control in a mechanistic study of beta3-adrenoceptors in eel hearts, with no pharmacokinetic parameters reported. |
| popPK | Mallem_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenergic receptors in rat aortic rings, using nadolol only as a non-selective beta-blocker antagonist to characterize receptor subtypes, not to measure nadolol's pharmacokinetic parameters. |
| PD | Mallem_2002 | not_relevant | 0 | 0 | The study is an in vitro pharmacology experiment on aortic rings investigating beta-adrenergic receptor mechanisms; it does not report a pharmacokinetic or exposure-response relationship for nadolol in a biological system (PK/PD). |
| popPK | Mallem_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of beta-adrenergic receptors in rat aorta where nadolol is used only as a tool compound/antagonist, not as the subject of pharmacokinetic analysis. |
| PD | Mallem_2003 | not_relevant | 0 | 0 | The study reports concentration-response parameters (pD2, Emax) for beta-agonists (CGP 12,177, cyanopindolol), not for nadolol; nadolol is used only as a qualitative antagonist to exclude beta-1/2 involvement. |
| popPK | Ozakca_2007 | irrelevant | 0 | 0 | The study is a pharmacological investigation of beta-adrenoceptor subtypes in rat gastric fundus where nadolol is used only as a non-specific antagonist tool, not as the subject of pharmacokinetic analysis. |
| PD | Ozakca_2007 | not_relevant | 0 | 0 | The paper is a pharmacological study on beta-adrenoceptor subtypes in rat gastric fundus; nadolol is used only as a non-selective antagonist to characterize receptor involvement, not as the subject of a PD or exposure-response analysis. |
| popPK | Sauvaget_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilation in rat aorta where nadolol is used only as a non-selective beta-blocker antagonist to characterize celiprolol's mechanism, not as the subject of a pharmacokinetic analysis. |
| PD | Sauvaget_2010 | not_relevant | 1 | 0 | The paper reports a qualitative inhibition of celiprolol-induced vasodilation by nadolol, but provides no numeric concentration-effect data, dose-response curve, or PD parameters for nadolol itself. |
| popPK | Tan_2021 | relevant | 8 | 2 | The study reports quantitative PK parameters (Cmax, AUC, clearance) for nadolol in rats, but specific numeric values are not present in the provided text, only percentage changes and fold-changes. |
| popPK | Toumaniantz_2005 | irrelevant | 0 | 0 | The study is a mechanistic vascular physiology experiment in rats where nadolol is used only as a beta-blocker antagonist to isolate receptor subtypes, not as a subject of pharmacokinetic analysis. |
| PD | Toumaniantz_2005 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacological effect of nadolol (blocking beta1/2 receptors to unmask beta3 response) in a transgenic rat model, but it does not provide a concentration-effect curve, dose-response relationship, or numeric PD parameters (like EC50 or Emax for nadolol itself) for nadolol. |
| popPK | Trochu_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor subtypes in rat aorta where nadolol is used as a tool compound (antagonist), not as the subject of pharmacokinetic analysis. |
| popPK | Webster_2026 | irrelevant | 0 | 0 | The study is a retrospective chart review of exercise performance and hemodynamics, not a pharmacokinetic study, and reports no PK parameters (CL, V, t1/2, etc.) for nadolol. |
| popPK | Williamson_1994 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology experiment in rat cardiac muscle where nadolol is used as a non-selective beta-blocker to isolate alpha-adrenergic effects, not a pharmacokinetic study of nadolol. |
| PD | Williamson_1994 | not_relevant | 0 | 0 | The study investigates the inotropic effects of phenylephrine in the presence of nadolol as a beta-blocker, but does not report a pharmacodynamic or exposure-response relationship for nadolol itself. |
| popPK | Wolkowicz_2002 | irrelevant | 0 | 0 | Nadolol is used only as a beta-blocker control in an in-vitro mechanistic study of prostaglandin receptors, with no pharmacokinetic parameters reported. |
| PD | Wolkowicz_2002 | not_relevant | 0 | 0 | The paper investigates the mechanism of prostaglandin E2 receptor action in rat atria; nadolol is only mentioned as a negative control (beta-blocker) that did not affect the specific agonist-induced response, and no PD parameters for nadolol are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:25 UTC</sub>
