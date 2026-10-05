<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;butylscopolamine&quot;}]"></div>

# butylscopolamine

- **generic name:** butylscopolamine
- **ATC codes:** `A03BB01`, `A03DB04`
- **DrugBank:** [DB09300](https://go.drugbank.com/drugs/DB09300) · **PubChem:** [CID 6852391](https://pubchem.ncbi.nlm.nih.gov/compound/6852391)
- **molar mass:** 360.473 g/mol (C21H30NO4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Butylscopolamine is an antispasmodic (muscarinic antagonist) used to relieve functional gastrointestinal disorders and abdominal cramping, and is also used in combination with analgesics. It is an approved medicine, appears on the WHO essential medicines list, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419361](https://www.wikidata.org/wiki/Q419361) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:15 | 1:17 | 0/0/0 | 0/0/0 | 0/0/0 | 51,055/1,240 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=butylscopolamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target), CHRM5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 28 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morris_2018.pdf` | Morris T et al., The pharmacokinetics of orally administ…, Journal of veterinary pharm… (2018) | popPK | 9 | [10.1111/jvp.12701](https://doi.org/10.1111/jvp.12701) | [30076627](https://pubmed.ncbi.nlm.nih.gov/30076627) | The study reports PK parameters for butylscopolamine in dogs, but only half-lives are explicitly provided in the text, lacking clearance, volume, or rate constants. |
| `Müller_2005.pdf` | Müller J et al., Drug specificity and intestinal membran…, Biochemical pharmacology (2005) | pd | 4 | [10.1016/j.bcp.2005.09.011](https://doi.org/10.1016/j.bcp.2005.09.011) | [16263091](https://www.ncbi.nlm.nih.gov/pubmed/16263091) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-04T13:14:59.115756+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goerg_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastrointestinal motility where butylscopolamine serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Goerg_2003 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects (e.g., prolonged gastric emptying) of n-butylscopolamine compared to placebo, but it does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50, etc.). |
| PGx | Gratzke_2007 | not_relevant | 0 | 0 | The study investigates in vitro pharmacodynamics of PDE5 inhibitors and butylscopolamine on smooth muscle but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hart_2015 | irrelevant | 0 | 0 | The study is an ex vivo biomechanical investigation of smooth muscle contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Krueger_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (muscle activity, secretion) and does not report any pharmacokinetic parameters for butylscopolamine. |
| popPK | Kubo_1981 | irrelevant | 0 | 0 | The study is a pharmacological investigation of ganglion blocking activity in cats and guinea pigs, using butylscopolamine only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Kubo_1981 | not_relevant | 2 | 1 | The paper reports qualitative potency rankings and qualitative curve shifts (Schild plots) for butylscopolamine but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect data in the text. |
| popPK | LINSALATA_1956 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | LINSALATA_1956 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Lewis_1997 | irrelevant | 0 | 0 | The paper is a review of tramadol, and butylscopolamine is only mentioned as a comparator agent without any pharmacokinetic data provided. |
| popPK | Mainguy-Seers_2019 | irrelevant | 0 | 0 | Butylscopolamine is used only as a diagnostic bronchodilator agent to assess residual bronchospasm, not as the subject of a pharmacokinetic study. |
| popPK | Matzkies_1992 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gall-bladder kinetics where butylscopolamine serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | McDermott_2025 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of thallium in a dog, and butylscopolamine is only mentioned as a supportive medication administered for gastrointestinal symptoms, with no PK parameters reported for it. |
| popPK | Meyer_2022 | irrelevant | 2 | 2 | The study is an in-vitro mechanistic characterization of transporter kinetics (Vmax, Km, intrinsic clearance) in HEK293 cells, not a pharmacokinetic study reporting in-vivo disposition parameters (CL, V, t1/2) for butylscopolamine. |
| popPK | Miyauchi_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methamphetamine, with butylscopolamine serving only as a co-administered agent to test behavioral effects. |
| popPK | Morris_2018 | relevant | 9 | 3 | The study reports PK parameters for butylscopolamine in dogs, but only half-lives are explicitly provided in the text, lacking clearance, volume, or rate constants. |
| popPK | Müller_2005 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Müller_2005 | not_relevant | 0 | 0 | The paper focuses on the drug specificity and membrane localization of organic cation transporters, not on pharmacodynamic or exposure-response modeling for butylscopolamine. |
| popPK | Pfaffendorf_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of spasmolytic potency in guinea-pig bile ducts, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Saitoh_1986 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding butylscopolamine pharmacokinetics. |
| popPK | Sasaki_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nilotinib and acetaminophen, using butylscopolamine only as a co-administered agent to suppress gastrointestinal motility, without reporting PK parameters for butylscopolamine itself. |
| popPK | Tytgat_2007 | irrelevant | 2 | 0 | This is a review article that summarizes pharmacokinetic properties (low bioavailability) but does not provide specific quantitative disposition parameters (CL, V, ka) or a compartmental model. |
| popPK | Voicu_1976 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of hypothermia in rats where butylscopolamine is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Voicu_1976 | not_relevant | 1 | 0 | The text is an abstract describing qualitative pharmacological correlations and mechanisms without providing any numeric PD parameters, dose-response curves, or quantitative data for butylscopolamine. |
| popPK | Weiser_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding in cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study is an ex vivo pharmacological investigation of smooth muscle contractility and receptor affinity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, results, or PD parameters for butylscopolamine. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference proceedings and contains no specific abstract content, data, or analysis regarding butylscopolamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
