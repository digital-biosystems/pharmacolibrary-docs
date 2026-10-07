<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07B&quot;,&quot;href&quot;:&quot;atc/C07B.md&quot;},{&quot;label&quot;:&quot;metipranolol&quot;}]"></div>

# metipranolol

- **generic name:** metipranolol
- **ATC codes:** `C07BA68`, `S01ED04`
- **DrugBank:** [DB01214](https://go.drugbank.com/drugs/DB01214) · **PubChem:** [CID 31477](https://pubchem.ncbi.nlm.nih.gov/compound/31477)
- **molar mass:** 309.4006 g/mol (C17H27NO4) — DrugBank
- **groups:** approved, withdrawn

## About

Metipranolol is a non-selective beta blocker that was used to treat open-angle glaucoma and ocular hypertension, and also as an antihypertensive and antiarrhythmic agent. It has been withdrawn from use, though it was once an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6593346](https://www.wikidata.org/wiki/Q6593346) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| metipranolol | parent | 309.401 | C17H27NO4 | DrugBank | [31477](https://pubchem.ncbi.nlm.nih.gov/compound/31477) | Abshagen_1982 |
| deacetyl metipranolol | metabolite | 267.369 | C15H25NO3 | PubChem | [162812](https://pubchem.ncbi.nlm.nih.gov/compound/162812) | Abshagen_1982 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:45 | 3:53 | 1/0/0 | 0/1/1 | 0/0/0 | 42,044/11,100 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.474). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Abshagen_1982_reference](drugs/drug_metipranolol/Metipranolol_Abshagen1982_reference.md) | held back | 1-compartment, oral | 10 | Abshagen U et al., Pharmacokinetics of metipranolol in nor…, European journal of clinica… (1982) | [10.1007/BF00637616](https://doi.org/10.1007/BF00637616) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lapka_1990_inhibition_of_exercise_induced_tachycardia](drugs/drug_metipranolol/pd_Lapka_1990_inhibition_of_exercise_induced_tachycardia.md) | inhibition of exercise-induced tachycardia ← deacetylmetipranolol · direct Emax (saturable) effect | model (no simulator) | Lapka R et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1990) | [10.1007/BF00315024](https://doi.org/10.1007/BF00315024) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Janků_1992_HR](drugs/drug_metipranolol/pd_Jank_1992_HR.md) | heart rate ← deacetylmetipranolol · direct Emax (saturable) effect | — | Janků I et al., Disposition kinetics and concentration-…, European journal of clinica… (1992) | [10.1007/BF00266359](https://doi.org/10.1007/BF00266359) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metipranolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abshagen_1982.pdf` | Abshagen U et al., Pharmacokinetics of metipranolol in nor…, European journal of clinica… (1982) | popPK | 10 | [10.1007/BF00637616](https://doi.org/10.1007/BF00637616) | [6120080](https://pubmed.ncbi.nlm.nih.gov/6120080) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for deacetyl metipranolol, the active metabolite of metipranolol, in humans. |
| `Janků_1992.pdf` | Janků I et al., Disposition kinetics and concentration-…, European journal of clinica… (1992) | popPK | 9 | [10.1007/BF00266359](https://doi.org/10.1007/BF00266359) | [1349528](https://pubmed.ncbi.nlm.nih.gov/1349528) | The study reports quantitative PK parameters (clearance, volume, half-life) for the active metabolite deacetylmetipranolol, but specific numeric values are not present in the provided abstract text. |
| `Lapka_1990.pdf` | Lapka R et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (1990) | popPK | 9 | [10.1007/BF00315024](https://doi.org/10.1007/BF00315024) | [1971217](https://pubmed.ncbi.nlm.nih.gov/1971217) | The study reports PK parameters (MRT, Cmax, Tmax) for metipranolol in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Motán_1991.pdf` | Motán J et al., [Kinetics of metipranolol in patients w…, Vnitrni lekarstvi (1991) | popPK | 9 | not captured | [1674391](https://pubmed.ncbi.nlm.nih.gov/1674391) | The study reports pharmacokinetic parameters (clearance, half-life) for metipranolol in humans, but the specific numeric values are not present in the provided evidence text. |
| `Seyfried_1982.pdf` | Seyfried C et al., [Pharmacokinetics of the beta-receptor…, Deutsche medizinische Woche… (1982) | popPK | 8 | [10.1055/s-2008-1069864](https://doi.org/10.1055/s-2008-1069864) | [6120063](https://pubmed.ncbi.nlm.nih.gov/6120063) | The study reports pharmacokinetic parameters for metipranolol in humans, but the evidence only provides qualitative descriptions and specific Tmax values, lacking the core quantitative disposition parameters (CL, V, t1/2) required for extraction. |
| `Wiederholt_1995.pdf` | Wiederholt M et al., Regulation of outflow rate and resistan…, Experimental eye research (1995) | pd | 4 | [10.1016/s0014-4835(05)80042-9](https://doi.org/10.1016/s0014-4835(05)80042-9) | [7556486](https://www.ncbi.nlm.nih.gov/pubmed/7556486) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T01:42:14.625562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Battershill_1988 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy (percent IOP reduction) without providing specific concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Bauer_1991 | irrelevant | 0 | 0 | The study evaluates systemic physiological effects (beta-blockade) rather than pharmacokinetic parameters like clearance or volume. |
| PD | Bauer_1991 | not_relevant | 2 | 1 | The paper reports qualitative comparisons of systemic beta-blockade potency (betaxolol &lt; metipranolol &lt; timolol) based on shifts in isoproterenol dose-response curves, but does not provide numeric PD parameters (e.g., EC50, Emax) or concentration-effect data for metipranolol. |
| popPK | Janků_1992 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearance, volume, half-life) for the active metabolite deacetylmetipranolol, but specific numeric values are not present in the provided abstract text. |
| popPK | Lapka_1990 | relevant | 9 | 4 | The study reports PK parameters (MRT, Cmax, Tmax) for metipranolol in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| popPK | Mikulecký_1986 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| popPK | Motán_1991 | relevant | 9 | 0 | The study reports pharmacokinetic parameters (clearance, half-life) for metipranolol in humans, but the specific numeric values are not present in the provided evidence text. |
| PD | Noack_1986 | not_relevant | 2 | 1 | The text is a qualitative review discussing lipophilicity and general efficacy, mentioning "supramaximal concentrations" without providing any numeric PD parameters, dose-response curves, or quantitative exposure-response data. |
| popPK | Ochs_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of isosorbide mononitrate and dinitrate, with metipranolol serving only as a co-administered beta-blocker. |
| popPK | Seyfried_1982 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for metipranolol in humans, but the evidence only provides qualitative descriptions and specific Tmax values, lacking the core quantitative disposition parameters (CL, V, t1/2) required for extraction. |
| popPK | Wiederholt_1995 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Wiederholt_1995 | not_relevant | 1 | 0 | The paper reports PD parameters (EC50, max effect) for carbachol, pilocarpine, and endothelin, but metipranolol is only mentioned qualitatively as a blocker of epinephrine's effect without any numeric dose-response or concentration-effect data. |
| popPK | de_1989 | irrelevant | 0 | 0 | The study assesses pharmacodynamic effects (beta-blockade via isoproterenol dose-response) rather than quantitative pharmacokinetic parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:42 UTC</sub>
