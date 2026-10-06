<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;sitaxentan&quot;}]"></div>

# sitaxentan

- **generic name:** sitaxentan
- **ATC codes:** `C02KX03`
- **DrugBank:** [DB06268](https://go.drugbank.com/drugs/DB06268) · **PubChem:** [CID 216235](https://pubchem.ncbi.nlm.nih.gov/compound/216235)
- **molar mass:** 454.905 g/mol (C18H15ClN2O6S2) — DrugBank
- **groups:** approved, withdrawn

## About

Sitaxentan is an endothelin receptor antagonist that was used to treat pulmonary arterial hypertension. It has been withdrawn from the market, reportedly because of concerns about liver damage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905664](https://www.wikidata.org/wiki/Q905664) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:33 | 1:42 | 0/0/0 | 0/0/0 | 0/0/0 | 39,222/1,566 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/6 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sitaxentan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor/substrate, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EDNRA (target), EDNRB (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 33 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dhaun_2007.pdf` | Dhaun N et al., The pharmacokinetic profile of sitaxsen…, British journal of clinical… (2007) | popPK | 10 | [10.1111/j.1365-2125.2007.02979.x](https://doi.org/10.1111/j.1365-2125.2007.02979.x) | [17635499](https://pubmed.ncbi.nlm.nih.gov/17635499) | The study reports quantitative pharmacokinetic parameters (CL/F, Vz/F, t1/2) for sitaxentan in humans with varying degrees of renal impairment. |

<sub>queue written 2026-10-06T16:33:18.899768+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aleo_2019 | irrelevant | 0 | 0 | The study is an in-vitro liver safety/toxicology assessment using a hepatocyte model, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for sitaxentan. |
| popPK | Barst_2004 | irrelevant | 0 | 0 | The paper reports clinical efficacy endpoints (VO2, walk distance) for sitaxentan in pulmonary arterial hypertension but contains no pharmacokinetic parameters (CL, V, t1/2). |
| popPK | Barst_2007 | irrelevant | 0 | 0 | The paper is a review of ambrisentan, and sitaxentan is only mentioned as a comparator for safety profiles without any pharmacokinetic data. |
| popPK | Benedict_2007 | irrelevant | 2 | 0 | This is a clinical review article that discusses the pharmacology and trials of sitaxsentan but does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) in the provided text. |
| PGx | Benza_2015 | not_relevant | 2 | 5 | The paper reports an association between a gene variant and clinical efficacy outcomes (functional class, 6MWD), not a pharmacokinetic or pharmacodynamic parameter of sitaxentan. |
| popPK | Bodsworth_1997 | irrelevant | 0 | 0 | The study evaluates valaciclovir and aciclovir for genital herpes and does not involve sitaxentan. |
| PD | Bodsworth_1997 | not_relevant | 0 | 0 | The paper is a clinical trial comparing valaciclovir and aciclovir for genital herpes; it reports PK parameters (Cmax, AUC) and clinical efficacy endpoints but contains no pharmacodynamic modeling or exposure-response analysis for sitaxentan. |
| popPK | Branson_2011 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| PD | Branson_2011 | not_relevant | 0 | 0 | The provided text is a placeholder for a PDF file and contains no scientific content, data, or PD parameters. |
| popPK | Cacoub_2008 | irrelevant | 0 | 0 | The paper is a clinical review of endothelin receptor antagonists for pulmonary arterial hypertension and does not report any quantitative pharmacokinetic parameters for sitaxentan. |
| popPK | Doggrell_2002 | irrelevant | 0 | 0 | The paper is a review of the therapeutic potential of endothelin receptor antagonists and does not report any quantitative pharmacokinetic parameters for sitaxentan. |
| popPK | Galié_2004 | irrelevant | 0 | 0 | The paper is a review of the endothelin system in pulmonary arterial hypertension and does not report any quantitative pharmacokinetic parameters for sitaxentan. |
| popPK | Hallow_2024 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of Endothelin-1 (ET-1) and the effects of endothelin receptor antagonists, not the drug sitaxentan. |
| popPK | Horn_2004 | irrelevant | 0 | 0 | The text is a clinical efficacy summary for sitaxsentan (a different drug) and contains no pharmacokinetic parameters for sitaxentan. |
| popPK | Kenna_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug-induced liver injury mechanisms (BSEP inhibition, mitochondrial toxicity, covalent binding) and does not report pharmacokinetic disposition parameters for sitaxentan. |
| PD | Kenna_2015 | not_relevant | 3 | 2 | The paper reports in vitro IC50/EC50 values for toxicity mechanisms (BSEP, MRP2, etc.) and calculates exposure-adjusted ratios, but it does not report a pharmacodynamic model or dose-response relationship for the drug's therapeutic effect or clinical toxicity in humans. |
| popPK | Lattanzio_2022 | irrelevant | 0 | 0 | The paper is a case report on macitentan and selexipag hepatotoxicity; sitaxentan is only mentioned as a withdrawn comparator drug with no PK parameters reported. |
| PGx | Lattanzio_2022 | not_relevant | 0 | 0 | The paper focuses on macitentan and selexipag, not sitaxentan, and reports a case of hepatotoxicity without providing quantitative PK/PD data for sitaxentan. |
| popPK | Lepist_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition and hepatocyte accumulation, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for sitaxentan. |
| PD | Lepist_2014 | not_relevant | 3 | 2 | The paper reports in vitro transporter inhibition (IC50) and cellular accumulation data, which are pharmacokinetic/toxicological mechanisms, not a pharmacodynamic exposure-response relationship for the drug's therapeutic effect. |
| popPK | Mia_2022 | irrelevant | 0 | 0 | The paper is a virtual screening study for avian influenza inhibitors where sitaxentan is only listed as a candidate compound, with no pharmacokinetic data reported. |
| popPK | Naeije_2010 | irrelevant | 0 | 0 | The study is a physiological/pharmacodynamic trial assessing hemodynamic and exercise responses to sitaxentan, with no pharmacokinetic parameters (CL, V, etc.) reported. |
| popPK | Patel_2011 | irrelevant | 0 | 0 | The study is a mechanistic/efficacy trial in pigs assessing renal protection, not a pharmacokinetic study reporting disposition parameters for sitaxentan. |
| popPK | Sidhu_2026 | irrelevant | 0 | 0 | The paper is a review of aprocitentan, not sitaxentan, and does not report sitaxentan PK parameters. |
| PD | Sidhu_2026 | not_relevant | 0 | 0 | The paper is a review of aprocitentan, not sitaxentan, and does not report specific numeric PD parameters for the queried drug. |
| popPK | Stavros_2010 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of sildenafil, with sitaxentan acting as a co-administered agent to assess drug-drug interactions rather than being the subject of PK parameter estimation. |
| PD | Stavros_2010 | not_relevant | 2 | 1 | The study reports only summary PD parameters (Emax+, Emax-, Eavg) for blood pressure changes from baseline, without providing the underlying concentration-effect data or fitting a PK/PD model to derive parameters like EC50 or slope. |
| popPK | Widlitz_2005 | irrelevant | 0 | 0 | The text is a clinical efficacy review of sitaxsentan (a different drug) and does not report pharmacokinetic parameters for sitaxentan. |
| popPK | Wu_2001 | irrelevant | 2 | 0 | The paper is a medicinal chemistry study focusing on structure-activity relationships and bioavailability, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for sitaxentan. |
| PD | Wu_2001 | not_relevant | 0 | 0 | The paper is a medicinal chemistry study focusing on structure-bioavailability relationships and reports in vitro potency (IC50) and PK parameters (bioavailability, half-life), but it does not report an in vivo exposure-response or dose-response PD model with numeric PD parameters like Emax or EC50 for the drug's therapeutic effect. |
| popPK | Wu_2004 | irrelevant | 1 | 0 | The paper focuses on the discovery and PK of a new compound (TBC3711), mentioning sitaxentan only as a background comparator without providing its quantitative PK parameters. |
| PD | Wu_2004 | not_relevant | 0 | 0 | The text describes the discovery, SAR, and basic PK of TBC3711 and mentions clinical trials of sitaxentan, but it does not report any exposure-response or dose-response analysis with numeric PD parameters for sitaxentan. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is a placeholder for a large PDF file and contains no scientific content, data, or parameters regarding sitaxentan or any pharmacodynamic relationship. |
| popPK | van_2020 | irrelevant | 0 | 0 | The paper describes a bioanalytical method validation for quantifying sitaxentan in plasma but does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
