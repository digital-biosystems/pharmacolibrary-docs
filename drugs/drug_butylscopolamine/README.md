<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;butylscopolamine&quot;}]"></div>

# butylscopolamine

- **generic name:** butylscopolamine
- **ATC codes:** `A03BB01`, `A03DB04`
- **DrugBank:** [DB09300](https://go.drugbank.com/drugs/DB09300)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Butylscopolamine is a peripherally acting antimuscarinic, anticholinergic agent. It is used to treat pain and discomfort caused by abdominal cramps, menstrual cramps, or other spasmodic activity in the digestive system. It is also effective at preventing bladder spasms. It is not a pain medication in the normal sense, since it does not directly affect pain, but rather works to prevent painful cramps and spasms from occurring. It is on the WHO Model List of Essential Medicines, the most important medications needed in a basic health system.

**Indication.** Used to treat abdmoninal cramping and pain [FDA Label].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 10:32 | 4:47 | 0/0/0 | 0/0/0 | 0/0/0 | 113,331/3,831 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=butylscopolamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>“…d 0.25-2 hours. Scopolamine butylbromide does not cross the blood brain barrier.…”</sub> | prose |
| excretion | bile duct | <sub>“…Mainly eliminated in the feces (69.7%) with very little in the urine (4.4%) [A7905]. Only…”</sub> | prose |
| excretion | kidney | <sub>“…nly eliminated in the feces (69.7%) with very little in the urine (4.4%) [A7905]. Only 2.8…”</sub> | prose |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target), CHRM5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
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
| `Morris_2018.pdf` | Morris T et al., The pharmacokinetics of orally administ…, Journal of veterinary pharm… (2018) | popPK | 8 | [10.1111/jvp.12701](https://doi.org/10.1111/jvp.12701) | [30076627](https://pubmed.ncbi.nlm.nih.gov/30076627) | The study reports quantitative PK parameters (half-life) for butylscopolamine in dogs, but lacks detailed compartmental values like clearance or volume of distribution. |
| `Müller_2005.pdf` | Müller J et al., Drug specificity and intestinal membran…, Biochemical pharmacology (2005) | pd | 4 | [10.1016/j.bcp.2005.09.011](https://doi.org/10.1016/j.bcp.2005.09.011) | [16263091](https://www.ncbi.nlm.nih.gov/pubmed/16263091) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-18T10:32:03.428381+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goerg_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastrointestinal motility where butylscopolamine serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Goerg_2003 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects (e.g., prolonged gastric emptying) of n-butylscopolamine compared to placebo, but it does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50, etc.). |
| PGx | Gratzke_2007 | not_relevant | 0 | 0 | The study investigates in vitro pharmacodynamics of PDE5 inhibitors and butylscopolamine on smooth muscle but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hart_2015 | irrelevant | 0 | 0 | The study is an ex vivo biomechanical investigation of smooth muscle contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Krueger_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (muscle activity, secretion) and does not report any pharmacokinetic parameters for butylscopolamine. |
| popPK | Kubo_1981 | irrelevant | 0 | 0 | The study is a pharmacological investigation of ganglion blocking activity in animals, not a pharmacokinetic study, and butylscopolamine is used only as a comparator agent. |
| PD | Kubo_1981 | not_relevant | 2 | 1 | The paper reports qualitative potency rankings and qualitative curve shifts (Schild plots) for butylscopolamine but does not provide numeric PD parameters (EC50, Emax) or extractable concentration-effect data in the text. |
| popPK | LINSALATA_1956 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | LINSALATA_1956 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Lewis_1997 | irrelevant | 0 | 0 | The paper is a review of tramadol, and butylscopolamine is only mentioned as a comparator agent without any pharmacokinetic parameters reported. |
| popPK | Mainguy-Seers_2019 | irrelevant | 0 | 0 | The study focuses on dexamethasone pharmacodynamics in horses, and butylscopolamine is only used as a diagnostic agent to assess bronchospasm, with no PK parameters reported. |
| popPK | Matzkies_1992 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gall-bladder kinetics where butylscopolamine serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | McDermott_2025 | irrelevant | 0 | 0 | The paper is a case report on thallium intoxication where butylscopolamine is used only as a supportive analgesic/antispasmodic, with no pharmacokinetic parameters reported for it. |
| popPK | Meyer_2022 | irrelevant | 2 | 3 | The study is an in-vitro mechanistic characterization of transporter kinetics (vmax, KM, intrinsic clearance) rather than a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for butylscopolamine in vivo. |
| popPK | Miyauchi_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methamphetamine, with butylscopolamine serving only as a co-administered agent to test behavioral effects, and no PK parameters for butylscopolamine are reported. |
| popPK | Morris_2018 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life) for butylscopolamine in dogs, but lacks detailed compartmental values like clearance or volume of distribution. |
| popPK | Müller_2005 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Müller_2005 | not_relevant | 0 | 0 | The paper focuses on the drug specificity and membrane localization of organic cation transporters, not on pharmacodynamic or exposure-response modeling for butylscopolamine. |
| popPK | Pfaffendorf_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of spasmolytic potency in guinea-pig bile ducts, not a pharmacokinetic study, and reports no disposition parameters for butylscopolamine. |
| popPK | Saitoh_1986 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding butylscopolamine. |
| popPK | Sasaki_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nilotinib and acetaminophen, using butylscopolamine only as a tool to suppress gastrointestinal motility, and does not report PK parameters for butylscopolamine itself. |
| popPK | Tytgat_2007 | irrelevant | 2 | 0 | The paper is a review that discusses the pharmacokinetic profile qualitatively (e.g., low bioavailability) but does not report specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Voicu_1976 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of hypothermia in rats where butylscopolamine is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Voicu_1976 | not_relevant | 1 | 0 | The text is an abstract describing qualitative pharmacological correlations and mechanisms without providing any numeric PD parameters, dose-response curves, or quantitative data for butylscopolamine. |
| popPK | Weiser_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding in cell lines and does not report any pharmacokinetic disposition parameters. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study is an ex vivo pharmacological investigation of smooth muscle contractility and receptor affinity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, results, or PD parameters for butylscopolamine. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a header for conference proceedings and contains no specific abstract content, data, or analysis regarding butylscopolamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
