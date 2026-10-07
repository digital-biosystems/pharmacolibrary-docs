<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;roxithromycin&quot;}]"></div>

# roxithromycin

- **generic name:** roxithromycin
- **ATC codes:** `J01FA06`
- **DrugBank:** [DB00778](https://go.drugbank.com/drugs/DB00778) · **PubChem:** [CID 6915744](https://pubchem.ncbi.nlm.nih.gov/compound/6915744)
- **molar mass:** 837.0465 g/mol (C41H76N2O15) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Roxithromycin is a macrolide antibiotic used to treat bacterial infections. It is not authorised in the European Union but remains used in various other countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424037](https://www.wikidata.org/wiki/Q424037) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:22 | 2:03 | 0/1/0 | 1/0/0 | 0/0/0 | 49,375/3,364 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Del_1990_reference](drugs/drug_roxithromycin/Roxithromycin_Del1990_reference.md) | — | 1-compartment (no model) | 0 | Del Tacca M et al., Roxithromycin penetration into gingiva…, Chemotherapy (1990) | [10.1159/000238785](https://doi.org/10.1159/000238785) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Lim_2006_TNF_alpha](drugs/drug_roxithromycin/pd_Lim_2006_TNF_alpha.md) | tumour necrosis factor-alpha ← roxithromycin · indirect response — drug inhibits the production of tumour necrosis factor-alpha | — | Lim JH et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary medic… (2006) | [10.1111/j.1439-0442.2006.00852.x](https://doi.org/10.1111/j.1439-0442.2006.00852.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Lim_2006_IL_6](drugs/drug_roxithromycin/pd_Lim_2006_IL_6.md) | interleukin-6 ← roxithromycin · indirect response — drug inhibits the production of interleukin-6 | — | Lim JH et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary medic… (2006) | [10.1111/j.1439-0442.2006.00852.x](https://doi.org/10.1111/j.1439-0442.2006.00852.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=roxithromycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | small intestine | `ABCB1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2B6` inhibitor, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 37 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dolton_2017.pdf` | Dolton MJ et al., Population-based meta-analysis of roxit…, The Journal of antimicrobia… (2017) | popPK | 10 | [10.1093/jac/dkw553](https://doi.org/10.1093/jac/dkw553) | [28039274](https://pubmed.ncbi.nlm.nih.gov/28039274) | The paper describes a population pharmacokinetic model for roxithromycin but does not contain any numeric parameter values (CL, V, etc.) in the provided evidence. |
| `Halstenson_1990.pdf` | Halstenson CE et al., Disposition of roxithromycin in patient…, Antimicrobial agents and ch… (1990) | popPK | 10 | [10.1128/AAC.34.3.385](https://doi.org/10.1128/AAC.34.3.385) | [2334149](https://pubmed.ncbi.nlm.nih.gov/2334149) | The abstract provides clear quantitative pharmacokinetic parameters including half-life and clearance for roxithromycin in human subjects. |
| `Lim_2006.pdf` | Lim JH et al., Pharmacokinetic/pharmacodynamic modelli…, Journal of veterinary medic… (2006) | popPK | 10 | [10.1111/j.1439-0442.2006.00852.x](https://doi.org/10.1111/j.1439-0442.2006.00852.x) | [16970627](https://pubmed.ncbi.nlm.nih.gov/16970627) | The study reports quantitative two-compartment pharmacokinetic parameters (Vc, rate constants) for roxithromycin in dogs. |
| `Del_1990.pdf` | Del Tacca M et al., Roxithromycin penetration into gingiva…, Chemotherapy (1990) | popPK | 9 | [10.1159/000238785](https://doi.org/10.1159/000238785) | [2119954](https://pubmed.ncbi.nlm.nih.gov/2119954) | The study reports quantitative PK parameters (Cmax, AUC, half-life) for roxithromycin in humans, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Liu_2023.pdf` | Liu K et al., Combined toxicity of erythromycin and r…, Ecotoxicology and environme… (2023) | pd | 5 | [10.1016/j.ecoenv.2023.114929](https://doi.org/10.1016/j.ecoenv.2023.114929) | [37084660](https://www.ncbi.nlm.nih.gov/pubmed/37084660) | metadata signals extractable PD data (EC50) |
| `Zhang_2019.pdf` | Zhang P et al., Single and combined effects of micropla…, Environmental science and p… (2019) | pd | 5 | [10.1007/s11356-019-05031-2](https://doi.org/10.1007/s11356-019-05031-2) | [30972681](https://www.ncbi.nlm.nih.gov/pubmed/30972681) | metadata signals extractable PD data (EC50) |
| `Kumar_2021.pdf` | Kumar VL et al., Effect of roxithromycin on contractile…, Journal of basic and clinic… (2021) | pd | 4 | [10.1515/jbcpp-2020-0051](https://doi.org/10.1515/jbcpp-2020-0051) | [33559463](https://www.ncbi.nlm.nih.gov/pubmed/33559463) | metadata signals extractable PD data (EC50) |
| `Ledirac_2000.pdf` | Ledirac N et al., Effects of macrolide antibiotics on CYP…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [11095572](https://www.ncbi.nlm.nih.gov/pubmed/11095572) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Oswald_2011.pdf` | Oswald S et al., LC-MS/MS method for the simultaneous de…, Journal of pharmaceutical a… (2011) | pgx | 7 | [10.1016/j.jpba.2011.01.019](https://doi.org/10.1016/j.jpba.2011.01.019) | [21310577](https://www.ncbi.nlm.nih.gov/pubmed/21310577) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Polasek_2006.pdf` | Polasek TM et al., Quantitative prediction of macrolide dr…, European journal of clinica… (2006) | pgx | 7 | [10.1007/s00228-005-0091-x](https://doi.org/10.1007/s00228-005-0091-x) | [16416302](https://www.ncbi.nlm.nih.gov/pubmed/16416302) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T11:21:24.953253+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Beltinger_2006 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between roxithromycin and cyclophosphamide, not a pharmacogenomic effect on roxithromycin. |
| popPK | Dolton_2017 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for roxithromycin but does not contain any numeric parameter values (CL, V, etc.) in the provided evidence. |
| PGx | Girard_2020 | not_relevant | 0 | 0 | The study is a pharmacovigilance analysis of drug-drug interactions between colchicine and roxithromycin, not a pharmacogenomic study reporting gene-based changes in PK or PD parameters. |
| PGx | Kaufmann_2006 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (roxiromycin inhibiting cyclophosphamide metabolism/toxicity) and does not report any pharmacogenomic effects on roxithromycin's own PK or PD parameters. |
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The study focuses on gastrointestinal contractile activity and intestinal transit in colitic rats, reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.) for roxithromycin. |
| PGx | Labro_2005 | not_relevant | 3 | 8 | Studies cellular accumulation in CFTR mutant vs wild-type cell lines, not systemic pharmacokinetic parameters in humans. |
| PGx | Ledirac_2000 | not_relevant | 0 | 0 | The study evaluates general CYP3A induction effects of macrolides in hepatocytes but does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters of roxithromycin. |
| PGx | Liu_2020 | not_relevant | 0 | 0 | The paper evaluates a drug-drug interaction (acetaminophen + roxithromycin) in rats and does not investigate any gene variants, genotypes, or phenotypes. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PGx | Munić_2010 | not_relevant | 0 | 0 | The study compares macrolide interaction with MDR1 using in vitro cell assays without assessing specific genetic variants (genotypes) in human subjects to determine changes in PK or PD parameters. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper focuses on CYP3A4 drug-drug interaction prediction models and does not report any pharmacogenomic effects (gene variants) on roxithromycin PK or PD. |
| PGx | Oswald_2011 | not_relevant | 0 | 0 | The paper describes a LC-MS/MS method for clarithromycin and rifampicin, using roxithromycin only as an internal standard without discussing its pharmacogenomics. |
| PGx | Polasek_2006 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDI) via CYP3A4 inhibition, not pharmacogenomic effects (gene variants/genotypes) on roxithromycin PK/PD. |
| PGx | Pérez-Del_2017 | not_relevant | 0 | 0 | The paper studies the in vitro metabolism and pharmacological effects of roxithromycin on nitric oxide production and CYP3A4 inhibition, but does not report any association between genetic variants/genotypes and PK or PD parameters. |
| popPK | Tamaoki_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ciliary motility, not a pharmacokinetic study of roxithromycin disposition. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper describes drug-drug interactions involving roxithromycin (as an inhibitor of theophylline clearance) but does not report pharmacogenomic effects (gene variants) on roxithromycin's PK or PD. |
| PGx | Yamazaki_1996 | not_relevant | 0 | 0 | The provided text is metadata/header from a software tool (GROBID) and does not contain a pharmacogenomic study for roxithromycin. |
| PGx | Yamazaki_1996_2 | not_relevant | 0 | 0 | The study examines enzyme induction and substrate metabolism mechanisms in vitro and in rats, not human pharmacogenomic effects (genotype/phenotype) on roxithromycin PK/PD parameters. |
| PGx | Yamazaki_1998 | not_relevant | 0 | 0 | The study reports in vitro inhibition of CYP enzymes by roxithromycin and its metabolites, but it does not examine how a genetic variant affects a pharmacokinetic or pharmacodynamic parameter in vivo. |
| PGx | Yoneda_2009 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetic profile and potential drug-drug interactions of pranlukast, not the pharmacogenomics of roxithromycin. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of roxithromycin's toxic effects on Daphnia magna, reporting toxicity endpoints (EC50, biomarkers) rather than pharmacokinetic disposition parameters. |
| PGx | Zhang_2022 | not_relevant | 1 | 2 | The paper reports pharmacogenomic effects on the pharmacokinetics of remdesivir, not roxithromycin. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses macrolide-drug interactions mediated by CYP3A4, not pharmacogenomic variations affecting roxithromycin's own PK or PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:21 UTC</sub>
