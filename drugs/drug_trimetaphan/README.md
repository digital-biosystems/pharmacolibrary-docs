<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02B&quot;,&quot;href&quot;:&quot;atc/C02B.md&quot;},{&quot;label&quot;:&quot;trimetaphan&quot;}]"></div>

# trimetaphan

- **generic name:** trimetaphan
- **ATC codes:** `C02BA01`
- **DrugBank:** [DB01116](https://go.drugbank.com/drugs/DB01116) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** A nicotinic antagonist that has been used as a ganglionic blocker in hypertension, as an adjunct to anesthesia, and to induce hypotension during surgery.

**Indication.** For the controlled reduction of blood pressure during surgery and in the treatment of hypertensive emergencies.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 05:56 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 1,810/178 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trimetaphan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA10 (target), CHRNA4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 43 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Clarke_1996.pdf` | Clarke PB et al., Release of [3H]-noradrenaline from rat…, British journal of pharmaco… (1996) | pd | 4 | [10.1111/j.1476-5381.1996.tb15232.x](https://doi.org/10.1111/j.1476-5381.1996.tb15232.x) | [8646402](https://www.ncbi.nlm.nih.gov/pubmed/8646402) | metadata signals extractable PD data (EC50) |
| `Kujawa_1994.pdf` | Kujawa SG et al., A nicotinic-like receptor mediates supp…, Hearing research (1994) | pd | 4 | [10.1016/0378-5955(94)90181-3](https://doi.org/10.1016/0378-5955(94)90181-3) | [8040083](https://www.ncbi.nlm.nih.gov/pubmed/8040083) | metadata signals extractable PD data (IC50) |
| `Peters_1990.pdf` | Peters JA et al., Antagonism of 5-HT3 receptor mediated c…, Neuroscience letters (1990) | pd | 4 | [10.1016/0304-3940(90)90796-c](https://doi.org/10.1016/0304-3940(90)90796-c) | [1691468](https://www.ncbi.nlm.nih.gov/pubmed/1691468) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T05:56:44.226033+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_1993 | irrelevant | 0 | 0 | The study investigates epidural blood flow during hypotension induced by trimetaphan and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Abe_1994 | irrelevant | 0 | 0 | The study investigates epidural blood flow during hypotension induced by trimetaphan and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| popPK | Behnia_1982 | irrelevant | 0 | 0 | The study evaluates renal function (creatinine clearance) during trimetaphan-induced hypotension and does not report pharmacokinetic parameters (CL, V, ka) for trimetaphan itself. |
| popPK | Cachelin_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor affinity (IC50/KB) in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters for trimetaphan. |
| popPK | Clarke_1996 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Clarke_1996 | not_relevant | 0 | 0 | The paper investigates the mechanism of nicotine's effect on neurotransmitter release in rat brain tissue and does not involve the drug trimetaphan or any pharmacokinetic/pharmacodynamic modeling. |
| popPK | Endoh_1996 | irrelevant | 0 | 0 | The study focuses on renal function and fluid effects during hypotensive anesthesia, not on the pharmacokinetic disposition parameters (CL, V, etc.) of trimetaphan. |
| popPK | Forsyth_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacology and teratogenesis of coniine, using trimetaphan only as a comparator antagonist without reporting any pharmacokinetic parameters for it. |
| PD | Forsyth_1996 | not_relevant | 1 | 0 | The paper reports IC50 values for coniine binding to nicotinic receptors, but the mention of trimetaphan is limited to a qualitative observation that it enhanced lethality in a dose-dependent manner without providing specific numeric PD parameters or a concentration-effect curve for trimetaphan. |
| popPK | Fukusaki_1990 | irrelevant | 0 | 0 | The study focuses on renal tubular function markers (NAG, Beta2-microglobulin) during hypotensive anesthesia, with trimetaphan serving only as a comparator agent rather than the subject of a pharmacokinetic analysis. |
| popPK | Furutani_1995 | irrelevant | 2 | 0 | The study focuses on a control system for blood pressure using trimetaphan as a tool, reporting dynamic control parameters (gain, time-constant) rather than standard pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Galvez_1977 | irrelevant | 0 | 0 | The study investigates renal physiology and the effect of renal artery stenosis on water clearance, using trimetaphan only as a tool to control blood pressure, and does not report any pharmacokinetic parameters for trimetaphan. |
| popPK | Gregory_1981 | irrelevant | 0 | 0 | The study investigates cerebral hemodynamics and CO2 responsiveness in cats, not the pharmacokinetic disposition parameters (CL, V, etc.) of trimetaphan. |
| popPK | Hammer_1996 | irrelevant | 0 | 0 | The paper is a case report of an overdose incident and does not report quantitative pharmacokinetic parameters for trimetaphan. |
| PD | Hammer_1996 | not_relevant | 1 | 0 | The text is a case report abstract describing an overdose event but does not provide specific numeric concentration-effect data, PK/PD parameters, or a dose-response curve for trimetaphan. |
| popPK | Harioka_1984 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on vascular smooth muscle relaxation and does not report any pharmacokinetic parameters. |
| popPK | Kujawa_1994 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Kujawa_1994 | not_relevant | 0 | 0 | The paper discusses the mechanism of otoacoustic emission suppression by contralateral sound and does not mention trimetaphan or report any pharmacodynamic parameters for it. |
| popPK | Mahata_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on catecholamine release and nicotinic receptor desensitization, where trimetaphan is used only as a comparative antagonist, not as the subject of a pharmacokinetic analysis. |
| PD | Mahata_1999 | not_relevant | 1 | 0 | The paper focuses on catestatin; trimetaphan is only mentioned as a less potent comparator in a general comparison, with no specific numeric PD parameters or dose-response curve provided for it. |
| popPK | Morita_1977 | irrelevant | 0 | 0 | Trimetaphan is used only as a vasodilator to manipulate cerebral perfusion pressure in a study of halothane's effects on brain blood flow, with no pharmacokinetic parameters reported for trimetaphan. |
| popPK | Nagata_1993 | irrelevant | 0 | 0 | The study focuses on renal and hepatic function markers during hypotensive anesthesia, not the pharmacokinetic disposition parameters (CL, V, etc.) of trimetaphan. |
| popPK | Nagata_1994 | irrelevant | 0 | 0 | The study is a clinical comparison of renal function during hypotension induced by trimetaphan, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Nagata_1996 | irrelevant | 0 | 0 | The study uses trimetaphan as an agent to induce hypotension to assess renal function, but does not report pharmacokinetic parameters (CL, V, etc.) for trimetaphan itself. |
| popPK | Nakamura_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuromuscular blockade in isolated muscle, reporting no pharmacokinetic parameters. |
| PD | Nakamura_1988 | not_relevant | 4 | 2 | The study describes qualitative dose-response shifts and relative potency (1/100-1/200) but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect curves for trimetaphan. |
| popPK | Nelson_1990 | irrelevant | 0 | 0 | The study uses trimetaphan as a tool to induce hypotension for cerebral blood flow measurement, not as the subject of a pharmacokinetic analysis. |
| popPK | Nelson_1991 | irrelevant | 0 | 0 | The study uses trimetaphan only as a tool to induce hypotension for assessing cerebral autoregulation and does not report any pharmacokinetic parameters for the drug. |
| popPK | Nooney_1992 | irrelevant | 0 | 0 | The study is an in-vitro patch clamp electrophysiology experiment investigating receptor pharmacology, not a pharmacokinetic study, and reports no disposition parameters for trimetaphan. |
| popPK | Ouyang_1988 | irrelevant | 0 | 0 | The study is a pharmacological investigation of opiate receptors in feline ileocecal sphincter where trimetaphan is used only as a non-specific antagonist, with no pharmacokinetic parameters reported. |
| PD | Ouyang_1988 | not_relevant | 0 | 0 | The paper studies opiate receptor agonists (morphine, dynorphin, N-allylnormetazocine) and only mentions trimetaphan as a tool to inhibit a response, without providing any dose-response data or PD parameters for trimetaphan itself. |
| popPK | Paradelis_1987 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamic study on neuromuscular blockade and does not report any pharmacokinetic parameters for trimetaphan. |
| popPK | Peters_1990 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study where trimetaphan is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Peters_1990 | not_relevant | 0 | 0 | The paper reports that trimetaphan was ineffective at 1 microM, providing no numeric PD parameters or extractable dose-response relationship. |
| popPK | Shinozaki_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of trimetaphan's effect on glutamate receptors in crayfish, reporting no pharmacokinetic parameters. |
| popPK | Sury_1988 | irrelevant | 1 | 0 | The study focuses on cardiovascular/hemodynamic effects (blood pressure, heart rate) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Takasaki_1992 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for bupivacaine, with trimetaphan serving only as an agent to induce hypotension rather than being the subject drug. |
| popPK | Takeda_1997 | irrelevant | 0 | 0 | The study is a hemodynamic comparison of organ blood flow, not a pharmacokinetic study, and reports no disposition parameters for trimetaphan. |
| popPK | Tominaga_1976 | irrelevant | 0 | 0 | The study focuses on cerebrovascular reactivity and uses trimetaphan only as a hemodynamic agent to block blood pressure rise, without reporting any pharmacokinetic parameters for trimetaphan. |
| popPK | Truong_2001 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological binding assay using trimetaphan as a probe ligand, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Weaver_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor pharmacology (Ki values) in avian brain slices, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
