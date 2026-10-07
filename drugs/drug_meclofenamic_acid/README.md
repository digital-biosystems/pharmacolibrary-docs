<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;meclofenamic acid&quot;}]"></div>

# meclofenamic acid

- **generic name:** meclofenamic acid
- **ATC codes:** `M01AG04`, `M02AA18`
- **DrugBank:** [DB00939](https://go.drugbank.com/drugs/DB00939) · **PubChem:** [CID 4037](https://pubchem.ncbi.nlm.nih.gov/compound/4037)
- **molar mass:** 296.149 g/mol (C14H11Cl2NO2) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Meclofenamic acid is a non-steroidal anti-inflammatory drug used to treat pain, inflammation, and arthritis. It is an approved medicine, also approved for veterinary use, and is available as topical products for joint and muscular pain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2823284](https://www.wikidata.org/wiki/Q2823284) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| meclofenamic_acid (meclofenamic acid) | metabolite | 296.149 | C14H11Cl2NO2 | DrugBank | [4037](https://pubchem.ncbi.nlm.nih.gov/compound/4037) | Johansson_1991, Snow_1981 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:56 | 1:20 | 0/0/2 | 0/0/0 | 0/0/0 | 45,738/2,546 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Johansson_1991_reference](drugs/drug_meclofenamic_acid/MeclofenamicAcid_Johansson1991_reference.md) | — | 1-compartment (no model) | 3 | Johansson IM et al., Studies of meclofenamic acid and two me…, Journal of veterinary pharm… (1991) | [10.1111/j.1365-2885.1991.tb00832.x](https://doi.org/10.1111/j.1365-2885.1991.tb00832.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Snow_1981_reference](drugs/drug_meclofenamic_acid/MeclofenamicAcid_Snow1981_reference.md) | — | 1-compartment (no model) | 2 | Snow DH et al., The pharmacokinetics of meclofenamic ac…, Journal of veterinary pharm… (1981) | [10.1111/j.1365-2885.1981.tb00724.x](https://doi.org/10.1111/j.1365-2885.1981.tb00724.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=meclofenamic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALOX5 (inhibitor), KCNQ2 (other), KCNQ3 (other), PTGS1 (inhibitor), PTGS2 (inhibitor), SERPINA7 (substrate), SLCO1C1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Johansson_1991.pdf` | Johansson IM et al., Studies of meclofenamic acid and two me…, Journal of veterinary pharm… (1991) | popPK | 10 | [10.1111/j.1365-2885.1991.tb00832.x](https://doi.org/10.1111/j.1365-2885.1991.tb00832.x) | [1744932](https://pubmed.ncbi.nlm.nih.gov/1744932) | The paper reports specific quantitative pharmacokinetic parameters (CL, Vd, t1/2) for meclofenamic acid in horses within the provided abstract text. |
| `Snow_1981.pdf` | Snow DH et al., The pharmacokinetics of meclofenamic ac…, Journal of veterinary pharm… (1981) | popPK | 10 | [10.1111/j.1365-2885.1981.tb00724.x](https://doi.org/10.1111/j.1365-2885.1981.tb00724.x) | [7349327](https://pubmed.ncbi.nlm.nih.gov/7349327) | The study reports quantitative PK parameters (t1/2, Vd) for meclofenamic acid in horses, specifically a half-life of 0.9 h and Vd of 0.128 L/kg, but other parameters like clearance and ka are described qualitatively or inferred. |
| `Malomvölgyi_1984.pdf` | Malomvölgyi B et al., Effects of cyclooxygenase inhibitors an…, Biomedica biochimica acta (1984) | pd | 4 | not captured | [6440541](https://www.ncbi.nlm.nih.gov/pubmed/6440541) | metadata signals extractable PD data (EC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Knights_2009.pdf` | Knights KM et al., Aldosterone glucuronidation by human li…, British journal of clinical… (2009) | pgx | 7 | [10.1111/j.1365-2125.2009.03469.x](https://doi.org/10.1111/j.1365-2125.2009.03469.x) | [19740398](https://www.ncbi.nlm.nih.gov/pubmed/19740398) | metadata signals extractable PGX data (UGT1A10, PK/PD-context) |
| `Yogo_2022.pdf` | Yogo Y et al., Metabolism of non-steroidal anti-inflam…, Drug metabolism and pharmac… (2022) | pgx | 5 | [10.1016/j.dmpk.2022.100455](https://doi.org/10.1016/j.dmpk.2022.100455) | [35617891](https://www.ncbi.nlm.nih.gov/pubmed/35617891) | metadata signals extractable PGX data (CYP105A1) |

<sub>queue written 2026-10-07T01:56:19.063845+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akram_2011 | irrelevant | 0 | 0 | The study is an in vitro bioassay for androgenic activity where meclofenamic acid is used only as a nonselective enzyme inhibitor to facilitate steroid metabolism, not as the subject of pharmacokinetic analysis. |
| popPK | Garg_2012 | irrelevant | 0 | 0 | The study investigates the electrophysiological activity of fenamates on Slo2.1 channels in Xenopus oocytes and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Knights_2009 | not_relevant | 0 | 0 | The study examines the effect of meclofenamic acid on the metabolism of aldosterone and does not report any pharmacogenomic changes (gene variants) affecting the pharmacokinetics or pharmacodynamics of meclofenamic acid itself. |
| popPK | Malo_1987 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of airway contraction where meclofenamic acid is used as an experimental co-administered agent, not a subject of PK analysis. |
| popPK | Malomvölgyi_1984 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on rabbit arteries and does not report pharmacokinetic parameters for meclofenamic acid. |
| popPK | Peretz_2005 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating meclofenamic acid as a potassium channel opener in cell lines and neurons, not a pharmacokinetic study. |
| popPK | Rothan_2016 | irrelevant | 0 | 0 | The paper is an antiviral efficacy study (in vitro/in vivo) for chikungunya virus where meclofenamic acid is used as a probe/antiviral agent, not a pharmacokinetic study. |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study of GABA(A) receptor modulation by meclofenamic acid and does not report pharmacokinetic parameters. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on GABA receptor binding and does not report pharmacokinetic parameters for meclofenamic acid. |
| PGx | Venkataraman_2014 | not_relevant | 0 | 0 | The study focuses on using engineered biocatalysts for drug synthesis, not on the effect of human genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | Veruki_2010 | irrelevant | 0 | 0 | The study uses meclofenamic acid as a pharmacological tool to block gap junctions in rat retinal neurons and reports biophysical membrane properties, not pharmacokinetic disposition parameters for the drug itself. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | This is an in vitro mechanistic study investigating ion channel activity, not a pharmacokinetic study reporting disposition parameters for meclofenamic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:56 UTC</sub>
