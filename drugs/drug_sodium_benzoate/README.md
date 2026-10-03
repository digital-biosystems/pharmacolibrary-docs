<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sodium benzoate&quot;}]"></div>

# sodium benzoate

- **generic name:** sodium benzoate
- **ATC codes:** `A16AX11`, `A16AX30`, `V04CG30`
- **DrugBank:** [DB03793](https://go.drugbank.com/drugs/DB03793) · **PubChem:** [CID 243](https://pubchem.ncbi.nlm.nih.gov/compound/243)
- **molar mass:** 122.123 g/mol (C7H6O2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A fungistatic compound that is widely used as a food preservative. It is conjugated to GLYCINE in the liver and excreted as hippuric acid. As the sodium salt form, sodium benzoate is used as a treatment for urea cycle disorders due to its ability to bind amino acids. This leads to excretion of these amino acids and a decrease in ammonia levels. Recent research shows that sodium benzoate may be beneficial as an add-on therapy (1 gram/day) in schizophrenia. Total Positive and Negative Syndrome Scale scores dropped by 21% compared to placebo.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benzoic acid | parent | 122.123 | C7H6O2 | DrugBank | [243](https://pubchem.ncbi.nlm.nih.gov/compound/243) | Kubota_1991 |
| hippuric acid | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:59 | 1:13 | 0/1/0 | 1/0/0 | 0/0/0 | 8,329/5,533 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kubota_1991_reference](drugs/drug_sodium_benzoate/SodiumBenzoate_Kubota1991_reference.md) | — | nonlinear / manual (no model) | 1 | Kubota K et al., Dose-dependent pharmacokinetics of benz…, European journal of clinica… (1991) | [10.1007/BF00314969](https://doi.org/10.1007/BF00314969) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Althubyani_2025_CA](drugs/drug_sodium_benzoate/pd_Althubyani_2025_CA.md) | chromosomal aberrations ← Sonchus oleraceus aqueous extract · direct linear effect | — | Althubyani MA et al., Biological analysis of, Frontiers in toxicology (2025) | [10.3389/ftox.2025.1674822](https://doi.org/10.3389/ftox.2025.1674822) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Althubyani_2025_ISSR_polymorphism_percentage](drugs/drug_sodium_benzoate/pd_Althubyani_2025_ISSR_polymorphism_percentage.md) | ISSR polymorphism percentage ← Sonchus oleraceus aqueous extract · direct linear effect | — | Althubyani MA et al., Biological analysis of, Frontiers in toxicology (2025) | [10.3389/ftox.2025.1674822](https://doi.org/10.3389/ftox.2025.1674822) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Althubyani_2025_MF](drugs/drug_sodium_benzoate/pd_Althubyani_2025_MF.md) | mutation frequency ← Sonchus oleraceus aqueous extract · direct linear effect | — | Althubyani MA et al., Biological analysis of, Frontiers in toxicology (2025) | [10.3389/ftox.2025.1674822](https://doi.org/10.3389/ftox.2025.1674822) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Althubyani_2025_MI](drugs/drug_sodium_benzoate/pd_Althubyani_2025_MI.md) | mitotic index ← Sonchus oleraceus aqueous extract · direct linear effect | — | Althubyani MA et al., Biological analysis of, Frontiers in toxicology (2025) | [10.3389/ftox.2025.1674822](https://doi.org/10.3389/ftox.2025.1674822) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Althubyani_2025_root_length](drugs/drug_sodium_benzoate/pd_Althubyani_2025_root_length.md) | root length ← Sonchus oleraceus aqueous extract · direct linear effect | — | Althubyani MA et al., Biological analysis of, Frontiers in toxicology (2025) | [10.3389/ftox.2025.1674822](https://doi.org/10.3389/ftox.2025.1674822) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_benzoate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC15A1` unknown, `SLCO2B1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DAO (unknown), RAB9A (inhibitor), SLC16A1 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kubota_1991.pdf` | Kubota K et al., Dose-dependent pharmacokinetics of benz…, European journal of clinica… (1991) | popPK | 9 | [10.1007/BF00314969](https://doi.org/10.1007/BF00314969) | [1804654](https://pubmed.ncbi.nlm.nih.gov/1804654) | Original human PK study of sodium benzoate with compartmental model parameters (Vmax 17.2–28.8 mg/kg/h reported), but other parameters (ka, V) are not numerically given in the abstract. |
| `MacArthur_2004.pdf` | MacArthur RB et al., Pharmacokinetics of sodium phenylacetat…, Molecular genetics and meta… (2004) | popPK | 8 | [10.1016/j.ymgme.2003.12.011](https://doi.org/10.1016/j.ymgme.2003.12.011) | [15050977](https://pubmed.ncbi.nlm.nih.gov/15050977) | This is an original PK study of sodium benzoate in humans, but the abstract contains almost no numeric disposition parameters (only time-to-undetectable values), with clearance/model values presumably in tables or figures not provided. |
| `Endo_2023.pdf` | Endo F et al., Pharmacokinetics, safety, and tolerabil…, Drug metabolism and pharmac… (2023) | popPK | 7 | [10.1016/j.dmpk.2022.100474](https://doi.org/10.1016/j.dmpk.2022.100474) | [36529053](https://pubmed.ncbi.nlm.nih.gov/36529053) | Sodium benzoate is the subject drug in a human IV PK study, but the evidence contains no numeric CL/V/half-life values (only excretion ratios), so parameters likely reside in tables/figures not provided. |
| `Esimbekova_2017.pdf` | Esimbekova EN et al., Inhibition effect of food preservatives…, Food chemistry (2017) | pd | 5 | [10.1016/j.foodchem.2017.05.059](https://doi.org/10.1016/j.foodchem.2017.05.059) | [28554639](https://www.ncbi.nlm.nih.gov/pubmed/28554639) | metadata signals extractable PD data (EC50) |
| `Gartiser_2007.pdf` | Gartiser S et al., Anaerobic inhibition and biodegradation…, Chemosphere (2007) | pd | 5 | [10.1016/j.chemosphere.2006.08.040](https://doi.org/10.1016/j.chemosphere.2006.08.040) | [17097129](https://www.ncbi.nlm.nih.gov/pubmed/17097129) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-30T02:58:24.208650+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Althubyani_2025 | irrelevant | 0 | 0 | This is a cytotoxicity/genotoxicity study of sodium benzoate in Allium cepa with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | DeGraves_1995 | irrelevant | 1 | 0 | The PK parameters (half-life, clearance) are for caffeine, not sodium benzoate, which is only the co-administered prodrug vehicle. |
| popPK | Endo_2023 | relevant | 7 | 2 | Sodium benzoate is the subject drug in a human IV PK study, but the evidence contains no numeric CL/V/half-life values (only excretion ratios), so parameters likely reside in tables/figures not provided. |
| popPK | Esimbekova_2017 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Esimbekova_2017 | not_relevant | 1 | 0 | In vitro enzyme-inhibition study of preservatives; no in vivo exposure-response or dose-effect PD relationship for sodium benzoate with extractable PD parameters. |
| popPK | Gartiser_2007 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Gartiser_2007 | not_relevant | 0 | 0 | Paper is about anaerobic biodegradation of antibiotics in ISO test schemes; no sodium benzoate PD or exposure-response data. |
| popPK | MacArthur_2004 | relevant | 8 | 2 | This is an original PK study of sodium benzoate in humans, but the abstract contains almost no numeric disposition parameters (only time-to-undetectable values), with clearance/model values presumably in tables or figures not provided. |
| popPK | Tunstall_1995 | irrelevant | 0 | 0 | In-vitro electrophysiology study of salicylate on hair cells; sodium benzoate is only a test compound with membrane capacitance effects, no PK disposition parameters. |
| PD | Tunstall_1995 | not_relevant | 2 | 2 | Sodium benzoate is tested at only a single concentration (10 mM) with a mean effect (−9.2 ± 3.2 pF capacitance; −0.25 nA current); no dose-response curve or PD parameters (Emax, EC50, slope) are reported or derivable for benzoate — the Hill fit applies to salicylate. |
| popPK | Zurita_2007 | irrelevant | 0 | 0 | Sodium benzoate is only used as a mechanistic modulator in an in-vitro fish cell toxicity study, with no PK parameters reported. |
| PD | Zurita_2007 | not_relevant | 1 | 0 | Sodium benzoate is only used as a mechanistic modulator in a cell-line toxicity assay; no concentration-effect or dose-response PD relationship for sodium benzoate is reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 10:42 UTC</sub>
