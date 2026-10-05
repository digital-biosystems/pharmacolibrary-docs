<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;thioctic acid&quot;}]"></div>

# thioctic acid

- **generic name:** thioctic acid
- **ATC codes:** `A16AX01`
- **DrugBank:** [DB00166](https://go.drugbank.com/drugs/DB00166) · **PubChem:** [CID 6112](https://pubchem.ncbi.nlm.nih.gov/compound/6112)
- **molar mass:** 206.326 g/mol (C8H14O2S2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Thioctic acid (alpha-lipoic acid) is used for conditions of the alimentary tract and metabolism, and is also taken as a dietary supplement. It is approved and widely available, being marketed both as a medicine and as a nutraceutical supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27887203](https://www.wikidata.org/wiki/Q27887203) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alpha lipoic acid (thioctic_acid) | parent | 206.326 | C8H14O2S2 | DrugBank | [6112](https://pubchem.ncbi.nlm.nih.gov/compound/6112) | Field_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:03 | 4:17 | 0/1/0 | 0/0/0 | 0/0/0 | 91,407/7,320 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">other animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Field_2021_reference](drugs/drug_thioctic_acid/ThiocticAcid_Field2021_reference.md) | — | 1-compartment (no model) | 1 | Field CL et al., PHARMACOKINETICS OF SUBCUTANEOUS ALPHA…, Journal of zoo and wildlife… (2021) | [10.1638/2020-0223](https://doi.org/10.1638/2020-0223) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thioctic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `POR` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: LIAS (unknown), LIPT1 (unknown), PTGS2 (inhibitor), SLC5A6 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 5  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Field_2021.pdf` | Field CL et al., PHARMACOKINETICS OF SUBCUTANEOUS ALPHA…, Journal of zoo and wildlife… (2021) | popPK | 10 | [10.1638/2020-0223](https://doi.org/10.1638/2020-0223) | [34687502](https://pubmed.ncbi.nlm.nih.gov/34687502) | The study reports population pharmacokinetic parameters (t1/2, CMAX) for alpha lipoic acid (thioctic acid) in California sea lions, with specific numeric values provided in the abstract. |
| `Nobakht-Haghighi_2018.pdf` | Nobakht-Haghighi N et al., Regulation of aging and oxidative stres…, Molecular and cellular bioc… (2018) | pd | 4 | [10.1007/s11010-018-3363-3](https://doi.org/10.1007/s11010-018-3363-3) | [29696608](https://www.ncbi.nlm.nih.gov/pubmed/29696608) | metadata signals extractable PD data (EC50) |
| `Walimbe_2025.pdf` | Walimbe AS et al., Expanded Clinical Phenotype and the Rol…, American journal of medical… (2025) | pgx | 5 | [10.1002/ajmg.a.64014](https://doi.org/10.1002/ajmg.a.64014) | [39898461](https://www.ncbi.nlm.nih.gov/pubmed/39898461) | metadata signals extractable PGX data (SLC5A6) |

<sub>queue written 2026-10-05T12:00:28.065744+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cheng_2025 | not_relevant | 0 | 0 | The paper describes a drug delivery system for oral ulcers and does not investigate pharmacogenomic effects on the PK or PD of thioctic acid. |
| PGx | El_2026 | not_relevant | 0 | 0 | The paper investigates the phytotoxic effects of nanoparticles on wheat and the protective role of lipoic acid in plants, containing no human pharmacogenomic data or PK/PD parameters for thioctic acid. |
| PGx | Galea_2012 | not_relevant | 0 | 0 | The paper is a review of oxidative stress mechanisms in neurodegenerative diseases and does not report pharmacogenomic effects on the PK or PD of thioctic acid. |
| popPK | Lahiani_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of a synthetic conjugate's neuroprotective effects, reporting no pharmacokinetic parameters for thioctic acid. |
| PD | Lahiani_2016 | not_relevant | 0 | 0 | The reported EC50 of 10 μM is for the AD3 α-lipoic-acid/Tempol PEG conjugate, not thioctic acid itself, and no thioctic-acid-specific exposure- or dose-response relationship is provided. |
| popPK | Lockhart_2000 | irrelevant | 0 | 0 | The study is an in-vitro neurotoxicity assay measuring cell viability (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Madawala_2011 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro antioxidant activity of lipoic acid conjugates, not on the pharmacokinetics of thioctic acid. |
| PD | Madawala_2011 | not_relevant | 1 | 1 | The paper reports an in vitro DPPH EC50 of 0.21 for a diacylglycerol–dihydrolipoic acid conjugate, but no dose/concentration-effect relationship or PD parameters for thioctic (lipoic) acid itself. |
| popPK | Mythili_2006 | irrelevant | 0 | 0 | The study is a mechanistic investigation of cardiac myofilament function in rats, not a pharmacokinetic study, and reports no disposition parameters for thioctic acid. |
| PD | Mythili_2006 | not_relevant | 3 | 1 | The study reports qualitative restoration of calcium-sensitivity and a reduced hill coefficient after a single LA dose, but provides no numeric LA exposure/dose-response parameters or extractable concentration-effect relationship in the supplied text. |
| popPK | Nobakht-Haghighi_2018 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Nobakht-Haghighi_2018 | not_relevant | 0 | 0 | The provided text describes a biological aging/oxidative-stress study but reports no extractable thioctic-acid exposure- or dose-response relationship or numeric PD parameters. |
| PGx | Peng_2004 | not_relevant | 0 | 0 | The paper investigates the metabolism of flunitrazepam, not thioctic acid. |
| PGx | Saito_2018 | not_relevant | 0 | 0 | The paper discusses alpha-lipoic acid (not thioctic acid) and mentions an HLA association with an adverse event (insulin autoimmune syndrome), but does not report a pharmacogenomic effect on PK or PD parameters of thioctic acid. |
| PGx | Schauer_2025 | not_relevant | 0 | 0 | The study investigates the effect of a liver support supplement (containing alpha-lipoic acid) on urinary biomarkers and does not report pharmacokinetic or pharmacodynamic parameters of thioctic acid itself. |
| PGx | Talaverón-Rey_2023 | not_relevant | 0 | 0 | The paper investigates the therapeutic mechanism of alpha-lipoic acid in cellular models of PKAN, not the pharmacokinetics or pharmacodynamics of the drug itself in relation to genetic variants. |
| PGx | Torchia_2025 | not_relevant | 0 | 0 | The paper discusses ifosfamide-induced encephalopathy and mentions alpha lipoic acid (thioctic acid) only as a preclinical agent, without reporting any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Venkatraman_2004 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (PPARgamma agonism, anti-inflammatory effects) of novel alpha-lipoic acid derivatives, not the pharmacokinetics of thioctic acid itself. |
| PGx | Vesnina_2026 | not_relevant | 0 | 0 | The paper is a review of citric acid cycle genetics and nutrigenetics, mentioning alpha-lipoic acid only as a nutrient affecting TCA cycle regulation, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Walimbe_2025 | not_relevant | 0 | 0 | The paper describes a transporter deficiency affecting the absorption of lipoic acid (thioctic acid) but does not report quantitative pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, EC50) or fitted effect sizes for the drug. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study on peroxisomal oxidative stress and does not report pharmacokinetic parameters for thioctic acid. |
| PGx | Wang_2013 | not_relevant | 0 | 0 | The paper discusses peroxisomal and mitochondrial oxidative stress mechanisms and does not mention thioctic acid or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | The study investigates the antiviral mechanism of alpha-lipoic acid in fish cells and animals, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 12:00 UTC</sub>
