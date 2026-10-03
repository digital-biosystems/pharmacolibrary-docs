<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;stanozolol&quot;}]"></div>

# stanozolol

- **generic name:** stanozolol
- **ATC codes:** `A14AA02`
- **DrugBank:** [DB06718](https://go.drugbank.com/drugs/DB06718) · **PubChem:** [CID 25249](https://pubchem.ncbi.nlm.nih.gov/compound/25249)
- **molar mass:** 328.4916 g/mol (C21H32N2O) — DrugBank
- **groups:** approved, vet_approved

## About

**Description.** Stanozolol is a synthetic anabolic steroid with therapeutic uses in treating hereditary angioedema. Stanozolol is derived from testosterone, and has been abused by several high profile professional athletes.

**Indication.** Stanozolol is a synthetic anabolic steroid with therapeutic uses in treating C1-inhibitor deficient hereditary angioedema. C1-inhibitor is a protease that inhibits the complement system (part of the innate immune system), a biochemical chain of reactions which assists the body in removing pathogens from the body. Stanozolol may help control attacks of hereditary angioedema.  Stanozolol can be administered orally or intramuscularly.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 01:02 | 1:14 | 0/0/0 | 0/0/0 | 0/0/0 | 1,648/174 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/2 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=stanozolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: Glucocorticoid binding proteins (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2001.pdf` | Lu B et al., Molecular cloning and functional charac…, Molecular and cellular bioc… (2001) | pd | 4 | [10.1023/a:1012752107129](https://doi.org/10.1023/a:1012752107129) | [11768233](https://www.ncbi.nlm.nih.gov/pubmed/11768233) | metadata signals extractable PD data (IC50) |
| `Masonis_1996.pdf` | Masonis AE et al., Effects of the androgenic/anabolic ster…, The Journal of pharmacology… (1996) | pd | 4 | not captured | [8858992](https://www.ncbi.nlm.nih.gov/pubmed/8858992) | metadata signals extractable PD data (Emax) |
| `Rathi_2025.pdf` | Rathi A et al., FDA-approved drugs as PIM-1 kinase inhi…, International journal of bi… (2025) | pd | 4 | [10.1016/j.ijbiomac.2024.139107](https://doi.org/10.1016/j.ijbiomac.2024.139107) | [39722389](https://www.ncbi.nlm.nih.gov/pubmed/39722389) | metadata signals extractable PD data (IC50) |
| `Sternberg_2025.pdf` | Sternberg J et al., In Vitro Metabolism of Doping Agents (S…, Metabolites (2025) | pgx | 7 | [10.3390/metabo15070452](https://doi.org/10.3390/metabo15070452) | [40710553](https://www.ncbi.nlm.nih.gov/pubmed/40710553) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-30T01:02:28.453600+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tacrolimus, not stanozolol. |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics (PPK) of tacrolimus and the effect of posaconazole on its clearance, containing no pharmacodynamic (PD) or exposure-response analysis for stanozolol. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment regarding post-mortem inspection delays and does not contain any pharmacokinetic data or parameters for stanozolol. |
| PD | EFSA_2020 | not_relevant | 0 | 0 | The paper discusses the impact of delayed post-mortem inspection on the detection of pathogens and contaminants, including general mentions of pharmacologically active substances, but does not report any pharmacodynamic or exposure-response data for stanozolol. |
| popPK | Fernández_1994 | irrelevant | 0 | 0 | The study is a mechanistic investigation of stanozolol's interaction with glucocorticoid-binding sites in rat liver microsomes and does not report pharmacokinetic disposition parameters. |
| PGx | Grundy_1999 | not_relevant | 0 | 0 | The paper uses stanozolol as a pharmacological tool to modulate hepatic lipase activity, but does not report pharmacogenomic effects on the PK or PD parameters of stanozolol itself. |
| popPK | Lu_2001 | irrelevant | 0 | 0 | The paper is a molecular biology study on the canine androgen receptor, using stanozolol only as a ligand in binding assays, and contains no pharmacokinetic parameters. |
| PD | Lu_2001 | not_relevant | 3 | 5 | The paper reports an IC50 value for stanozolol in a competition binding assay, which is a pharmacodynamic parameter, but it is a single-point in vitro binding affinity measurement rather than a full exposure-response or dose-response curve analysis with multiple parameters (like Emax or slope) derived from a PK/PD model. |
| popPK | Masonis_1996 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| popPK | Ni_2013 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for ciclosporin, with stanozolol serving only as a covariate affecting ciclosporin clearance rather than being the subject drug. |
| PD | Ni_2013 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for ciclosporin where stanozolol is identified as a covariate affecting clearance, but it does not report any pharmacodynamic (PD) or exposure-response relationship for stanozolol itself. |
| popPK | Pokushalov_2025 | irrelevant | 0 | 0 | The study investigates the efficacy of EF-M2 in canine osteoarthritis and does not involve stanozolol or report any pharmacokinetic parameters. |
| PD | Pokushalov_2025 | not_relevant | 0 | 0 | The paper studies EF-M2 (Immutalon) in canine osteoarthritis and does not mention stanozolol or report any pharmacodynamic parameters for it. |
| popPK | Rathi_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on PIM-1 kinase inhibition and does not report any pharmacokinetic parameters for stanozolol. |
| PD | Rathi_2025 | not_relevant | 0 | 0 | The paper identifies stanozolol as a binder via docking and MD simulations but provides no experimental PD data, concentration-effect analysis, or numeric PD parameters for stanozolol. |
| popPK | Roberts_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dextroamphetamine, and stanozolol is only mentioned as a comparator in the introduction regarding hair melanin binding. |
| PD | Roberts_2015 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) analysis of dextroamphetamine, not stanozolol, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| popPK | Salvador_2008 | irrelevant | 0 | 0 | The paper describes the development of immunochemical assays (ELISA) for detection and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Salvador_2008 | not_relevant | 0 | 0 | The paper describes the development of ELISA assays for detecting stanozolol and its metabolite, reporting analytical parameters like IC50 for the assay itself, but contains no pharmacodynamic or exposure-response data for the drug. |
| popPK | Salvador_2010 | irrelevant | 0 | 0 | The paper describes an analytical method (ELISA) for detecting stanozolol in urine and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Salvador_2010 | not_relevant | 0 | 0 | The paper describes an analytical method (ELISA/SPE) for detecting stanozolol metabolites and reports analytical parameters (IC50 of the assay, LOD, recovery), but does not report any pharmacodynamic or exposure-response relationship for the drug itself. |
| PGx | Sternberg_2025 | not_relevant | 0 | 0 | The study investigates tissue-specific metabolism (seminal vesicle vs. liver) in vitro and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Tanago_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor transactivation and does not report any pharmacokinetic parameters for stanozolol. |
| PD | Tanago_2014 | not_relevant | 1 | 0 | The paper mentions stanozolol as a low-potency synergist in a qualitative manner but does not provide specific numeric PD parameters (e.g., EC50, Emax) or a detailed concentration-response curve for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
