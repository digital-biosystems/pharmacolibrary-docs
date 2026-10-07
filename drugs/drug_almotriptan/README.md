<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;almotriptan&quot;}]"></div>

# almotriptan

- **generic name:** almotriptan
- **ATC codes:** `N02CC05`
- **DrugBank:** [DB00918](https://go.drugbank.com/drugs/DB00918) · **PubChem:** [CID 123606](https://pubchem.ncbi.nlm.nih.gov/compound/123606)
- **molar mass:** 335.464 g/mol (C17H25N3O2S) — DrugBank
- **groups:** approved

## About

Almotriptan is a serotonin receptor agonist used to treat migraine attacks. It is an approved medicine, classified as a selective serotonin agonist antimigraine drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409729](https://www.wikidata.org/wiki/Q409729) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| almotriptan | parent | 335.464 | C17H25N3O2S | DrugBank | [123606](https://pubchem.ncbi.nlm.nih.gov/compound/123606) | Jansat_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:23 | 0:59 | 0/1/0 | 0/0/0 | 0/0/0 | 80,155/6,292 | einfracz / qwen3.8-27b | 3 | 2/1 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jansat_2002_reference](drugs/drug_almotriptan/Almotriptan_Jansat2002_reference.md) | — | 1-compartment (no model) | 5 | Jansat JM et al., Absolute bioavailability, pharmacokinet…, Journal of clinical pharmac… (2002) | [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=almotriptan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `FMO3` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1B (target), HTR1D (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jansat_2002.pdf` | Jansat JM et al., Absolute bioavailability, pharmacokinet…, Journal of clinical pharmac… (2002) | popPK | 9 | [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006) | [12463724](https://pubmed.ncbi.nlm.nih.gov/12463724) | The paper reports PK parameters for almotriptan in humans, including half-life, bioavailability, and clearance percentages, but lacks specific numeric values for absolute clearance (L/hr) and volume (L) in the provided text. |
| `Nirogi_2013.pdf` | Nirogi R et al., LC-MS/MS method for the quantification…, Journal of pharmaceutical a… (2013) | pd | 5 | [10.1016/j.jpba.2013.04.008](https://doi.org/10.1016/j.jpba.2013.04.008) | [23666253](https://www.ncbi.nlm.nih.gov/pubmed/23666253) | metadata signals extractable PD data (PK/PD) |
| `Fleishaker_2000.pdf` | Fleishaker JC et al., Pharmacokinetic interaction between ver…, Clinical pharmacology and t… (2000) | pgx | 7 | [10.1067/mcp.2000.106292](https://doi.org/10.1067/mcp.2000.106292) | [10824628](https://www.ncbi.nlm.nih.gov/pubmed/10824628) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fleishaker_2003.pdf` | Fleishaker JC et al., Interaction between ketoconazole and al…, Journal of clinical pharmac… (2003) | pgx | 7 | [10.1177/0091270003252242](https://doi.org/10.1177/0091270003252242) | [12723463](https://www.ncbi.nlm.nih.gov/pubmed/12723463) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `McEnroe_2005.pdf` | McEnroe JD et al., Clinical pharmacokinetics of almotripta…, Clinical pharmacokinetics (2005) | pgx | 7 | [10.2165/00003088-200544030-00002](https://doi.org/10.2165/00003088-200544030-00002) | [15762767](https://www.ncbi.nlm.nih.gov/pubmed/15762767) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T06:22:32.497886+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belvis_2014 | irrelevant | 0 | 0 | The paper is a narrative review discussing migraine treatment strategies and does not report original quantitative pharmacokinetic parameters for almotriptan. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review discussing the clinical use and profiles of triptans, including almotriptan, but does not present any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Belvís_2009 | irrelevant | 0 | 0 | The paper is a review discussing triptan selection and does not report original quantitative pharmacokinetic parameters for almotriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for almotriptan. |
| popPK | Bou_2000 | irrelevant | 0 | 0 | The paper is a pharmacological study focusing on receptor binding affinity and functional vascular responses (vasoconstriction), reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for almotriptan. |
| popPK | Bou_2001 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic data (contractile EC50) rather than quantitative pharmacokinetic disposition parameters. |
| PGx | Buzzi_2008 | not_relevant | 5 | 0 | The paper is a qualitative review discussing general pharmacogenetic pathways for triptans and does not report specific quantitative PK/PD effects for almotriptan. |
| popPK | Chryssafidis_2022 | irrelevant | 2 | 0 | The paper models almotriptan data using a general equation but explicitly states that parameter uncertainties prevent reliable determination of any pharmacokinetic parameters, and no numeric values are provided in the text. |
| popPK | Dowson_2004 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and tolerability that mentions pharmacokinetic properties qualitatively but provides no quantitative disposition parameters. |
| PD | Dowson_2004 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy and PK properties without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with verapamil, not the effect of a specific gene variant or genotype on almotriptan pharmacokinetics. |
| PGx | Fleishaker_2003 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ketoconazole) rather than a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | McEnroe_2005 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | McEnroe_2005 | not_relevant | 0 | 0 | The paper focuses on the clinical pharmacokinetics of almotriptan and does not report any pharmacodynamic, exposure-response, or dose-response analysis with numeric PD parameters. |
| PGx | McEnroe_2005 | not_relevant | 0 | 0 | The title indicates a general clinical pharmacokinetics study without specific mention of a pharmacogenomic effect (gene variant influencing PK). |
| popPK | Negro_2013 | irrelevant | 2 | 0 | The paper is a review article discussing pharmacokinetic aspects of almotriptan but does not present original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Negro_2013 | not_relevant | 2 | 0 | The text is a review summary that qualitatively discusses pharmacodynamic aspects but does not provide specific numeric PD parameters or concentration-effect data. |
| popPK | Nirogi_2013 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | Nirogi_2013 | not_relevant | 0 | 0 | The paper describes an LC-MS/MS method and a microdialysis study for quantifying almotriptan, but does not report any pharmacodynamic or exposure-response analysis. |
| popPK | Ou_2024 | irrelevant | 0 | 0 | The paper concerns optical imaging and tissue clearing in mice, not the pharmacokinetics of almotriptan. |
| PD | Ou_2024 | not_relevant | 0 | 0 | The paper discusses optical physics and tissue clearing in mice, containing no pharmacological data, PK/PD analysis, or mention of almotriptan. |
| PGx | Salva_2003 | not_relevant | 1 | 0 | The paper identifies the enzymes involved in almotriptan metabolism using in vitro methods and confirms their role in vivo but does not report pharmacogenomic effects of specific genetic variants on PK or PD parameters. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 1 | 0 | The paper is a comparative review of triptans that discusses efficacy and general pharmacokinetic properties (like bioavailability and half-life) but does not report specific quantitative disposition parameters (CL, V, Q, ka) for almotriptan. |
| PD | Tfelt-Hansen_2000 | not_relevant | 2 | 1 | The text is a comparative review that lists therapeutic gains (efficacy outcomes) for various triptans, including almotriptan, but does not report any pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response/dose-response curves. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 1 | 0 | The paper is a clinical review of dose-response and tolerability, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, ka, etc.) for almotriptan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:22 UTC</sub>
