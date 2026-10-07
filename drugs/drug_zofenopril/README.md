<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;zofenopril&quot;}]"></div>

# zofenopril

- **generic name:** zofenopril
- **ATC codes:** `C09AA15`, `C09BA15`, `C09BX07`
- **DrugBank:** [DB13166](https://go.drugbank.com/drugs/DB13166) · **PubChem:** [CID 92400](https://pubchem.ncbi.nlm.nih.gov/compound/92400)
- **molar mass:** 429.55 g/mol (C22H23NO4S2) — DrugBank
- **groups:** approved, investigational

## About

Zofenopril is an ACE inhibitor used to treat arterial hypertension and acute myocardial infarction. It is an approved medicine, though not authorised centrally in the European Union, and is used mainly in some European countries such as Italy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q218284](https://www.wikidata.org/wiki/Q218284) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:43 | 1:47 | 0/0/0 | 0/0/0 | 0/0/0 | 56,834/1,298 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/1 | 1/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zofenopril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 26 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marzo_1999.pdf` | Marzo A et al., Pharmacokinetics and pharmacodynamics o…, Arzneimittel-Forschung (1999) | popPK | 8 | [10.1055/s-0031-1300539](https://doi.org/10.1055/s-0031-1300539) | [10635443](https://pubmed.ncbi.nlm.nih.gov/10635443) | The study reports PK/PD for zofenopril in humans, but the evidence text only provides qualitative descriptions (Tmax, duration of ACE inhibition) and lacks specific numeric values for clearance, volume, or half-life. |
| `Lin_1999.pdf` | Lin CJ et al., Competitive inhibition of glycylsarcosi…, Pharmaceutical research (1999) | pd | 4 | [10.1023/a:1018847818766](https://doi.org/10.1023/a:1018847818766) | [10350000](https://www.ncbi.nlm.nih.gov/pubmed/10350000) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:43:14.702455+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bălan_2011 | irrelevant | 0 | 0 | The study reports blood pressure outcomes and chronotherapy effects, not pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Bălan_2011 | not_relevant | 2 | 1 | Chronotherapy comparison of fixed 30 mg dosing times with ABPM outcomes only; no concentration-effect or dose-response data or numeric PD parameters reported. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for zofenopril. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | Narrative review of cardiovascular pharmacotherapy with no zofenopril-specific PD or exposure/dose-response data or parameters. |
| popPK | Chen_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of azelnidipine, with zofenopril mentioned only as a comparator drug for efficacy. |
| popPK | Cushman_1989 | irrelevant | 1 | 0 | The study is a mechanistic ex vivo tissue distribution analysis of ACE inhibition in rats, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for zofenopril. |
| popPK | Cushman_1989_2 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamic potency and tissue distribution of ACE inhibition rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | DeForrest_1989 | irrelevant | 1 | 0 | The paper reports preclinical pharmacological potency (IC50, EC50, blood pressure changes) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Elijovich_1997 | irrelevant | 0 | 0 | The study investigates the effects of zofenopril on plasma atrial natriuretic peptide (ANP) levels and blood pressure, not its pharmacokinetic parameters (clearance, volume, half-life). |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is an in-silico drug repurposing study for COVID-19 and does not contain any pharmacokinetic data for zofenopril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Network-based drug repurposing algorithm; zofenopril only appears as a predicted ACE-inhibitor candidate with no exposure-, dose-, or concentration-effect data or PD parameters. |
| popPK | Lin_1999 | irrelevant | 1 | 2 | In-vitro transporter inhibition study; zofenopril is only a test inhibitor (IC50 81 µM), not a PK disposition study with CL/V parameters. |
| PD | Lin_1999 | not_relevant | 1 | 3 | In vitro rabbit renal BBMV transporter inhibition study reporting IC50 (81 µM) for zofenopril against GlySar uptake — a biochemical drug-transporter interaction, not an in-vivo exposure- or dose-response PD relationship for a therapeutic effect. |
| popPK | Mackaness_1985 | irrelevant | 0 | 0 | The paper is a review discussing the development and general properties of ACE inhibitors, including zofenopril, but it does not report any quantitative pharmacokinetic parameters or original data. |
| popPK | Marzo_1999 | relevant | 8 | 2 | The study reports PK/PD for zofenopril in humans, but the evidence text only provides qualitative descriptions (Tmax, duration of ACE inhibition) and lacks specific numeric values for clearance, volume, or half-life. |
| popPK | Matarrese_2004 | irrelevant | 2 | 0 | The study is a preliminary PET imaging evaluation of tissue distribution and does not report quantitative compartmental PK parameters (CL, V, ka) for zofenopril or its metabolite. |
| popPK | Sarro_2012 | irrelevant | 0 | 0 | This is a pharmacodynamic seizure study in mice; no PK disposition parameters for zofenopril are reported. |
| PD | Sarro_2012 | not_relevant | 3 | 2 | Preclinical animal dose-response study of ACE inhibitors potentiating antiepileptic drugs; no concentration-effect data or numeric PD parameters (Emax, EC50, etc.) for zofenopril are reported or derivable. |
| popPK | Shionoiri_1997 | irrelevant | 0 | 0 | The paper is a review of fosinopril pharmacokinetics, and zofenopril is only mentioned as a comparator with no quantitative data provided. |
| popPK | Tian_2015 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation and mentions PK application but provides no quantitative pharmacokinetic parameter values (CL, V, etc.) in the evidence. |
| popPK | Westendorp_2005 | irrelevant | 2 | 0 | The study reports steady-state tissue and plasma concentrations (drug levels) rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Westlin_1988 | irrelevant | 1 | 0 | This is a free-radical scavenging/reperfusion study; zofenopril appears only as a comparator with IC50 values, with no PK disposition parameters reported. |
| popPK | Zaccara_2020 | irrelevant | 0 | 0 | This is a narrative review of seizure effects of cardiovascular drugs; zofenopril is only mentioned as having anticonvulsant properties, with no PK parameters reported. |
| PD | Zaccara_2020 | not_relevant | 1 | 0 | Qualitative review mention of zofenopril's anticonvulsant effects only; no concentration- or dose-effect data or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
