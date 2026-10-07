<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;thiotepa&quot;}]"></div>

# thiotepa

- **generic name:** thiotepa
- **ATC codes:** `L01AC01`
- **DrugBank:** [DB04572](https://go.drugbank.com/drugs/DB04572) · **PubChem:** [CID 5453](https://pubchem.ncbi.nlm.nih.gov/compound/5453)
- **molar mass:** 189.218 g/mol (C6H12N3PS) — DrugBank
- **groups:** approved, investigational

## About

Thiotepa is an alkylating anticancer drug used to treat cancers such as lymphoma and bladder cancer, and as part of conditioning before stem cell transplantation. It remains in use and is authorised in the European Union, mainly in hospital settings for oncology and transplant conditioning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416507](https://www.wikidata.org/wiki/Q416507) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| thiotepa | parent | 189.218 | C6H12N3PS | DrugBank | [5453](https://pubchem.ncbi.nlm.nih.gov/compound/5453) | Przepiorka_1995, de_2004 |
| 4-hydroxycyclophosphamide | metabolite | — (mass units only) | — | — | — | — |
| TEPA | metabolite | 173.156 | C6H12N3OP | PubChem | [11016](https://pubchem.ncbi.nlm.nih.gov/compound/11016) | Przepiorka_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:32 | 1:18 | 0/2/1 | 0/0/0 | 0/0/0 | 60,010/6,958 | einfracz / qwen3.8-27b | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Przepiorka_1995_adults undergoing marrow transplantation](drugs/drug_thiotepa/Thiotepa_Przepiorka1995_reference.md) | — | parent + metabolite (no model) | 5 | Przepiorka D et al., Dosing of thioTEPA for myeloablative th…, Cancer chemotherapy and pha… (1995) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Huitema_2001_patients undergoing high-dose chemotherapy](drugs/drug_thiotepa/Thiotepa_Huitema2001_reference.md) | — | parent + metabolite (no model) | 0 | Huitema AD et al., Population pharmacokinetics of thioTEPA…, British journal of clinical… (2001) | [10.1046/j.1365-2125.2001.01301.x](https://doi.org/10.1046/j.1365-2125.2001.01301.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [de_2004_patients receiving high-dose chemotherapy](drugs/drug_thiotepa/Thiotepa_de2004_reference.md) | — | general linear (no model) | 2 | de Jonge ME et al., Integrated Population Pharmacokinetic M…, Journal of pharmacokinetics… (2004) | [10.1023/b:jopa.0000034405.03895.c2](https://doi.org/10.1023/b:jopa.0000034405.03895.c2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thiotepa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `CYP2B6` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 54 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huitema_2001.pdf` | Huitema AD et al., Population pharmacokinetics of thioTEPA…, British journal of clinical… (2001) | popPK | 10 | [10.1046/j.1365-2125.2001.01301.x](https://doi.org/10.1046/j.1365-2125.2001.01301.x) | [11167666](https://pubmed.ncbi.nlm.nih.gov/11167666) | The abstract explicitly reports quantitative population PK parameters (CL, V, metabolite elimination) for thiotepa in human patients. |
| `Huitema_2002.pdf` | Huitema AD et al., Relationship between exposure and toxic…, Annals of oncology : offici… (2002) | popPK | 10 | [10.1093/annonc/mdf052](https://doi.org/10.1093/annonc/mdf052) | [11996467](https://pubmed.ncbi.nlm.nih.gov/11996467) | The paper is a population pharmacokinetic study of thiotepa in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text excerpt. |
| `Przepiorka_1995.pdf` | Przepiorka D et al., Dosing of thioTEPA for myeloablative th…, Cancer chemotherapy and pha… (1995) | popPK | 10 | not captured | [7497586](https://pubmed.ncbi.nlm.nih.gov/7497586) | The abstract provides explicit numeric values for thiotepa's central volume (Vc), half-lives (alpha and beta), and plasma clearance derived from a two-compartment model. |
| `de_2004.pdf` | de Jonge ME et al., Integrated Population Pharmacokinetic M…, Journal of pharmacokinetics… (2004) | popPK | 10 | [10.1023/b:jopa.0000034405.03895.c2](https://doi.org/10.1023/b:jopa.0000034405.03895.c2) | [15379382](https://pubmed.ncbi.nlm.nih.gov/15379382) | The abstract explicitly reports quantitative population PK parameters for thiotepa, including inducible clearance (12.4 l/hr), non-inducible clearance (17.0 l/hr), and enzyme elimination rate constant (0.0343 hr-1). |
| `Ekhart_2009.pdf` | Ekhart C et al., Polymorphisms of drug-metabolizing enzy…, British journal of clinical… (2009) | pgx | 8 | [10.1111/j.1365-2125.2008.03321.x](https://doi.org/10.1111/j.1365-2125.2008.03321.x) | [19076156](https://www.ncbi.nlm.nih.gov/pubmed/19076156) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Li_2013.pdf` | Li Y et al., The CYP2B6*6 allele significantly alter…, Drug metabolism and disposi… (2013) | pgx | 8 | [10.1124/dmd.113.051631](https://doi.org/10.1124/dmd.113.051631) | [23550066](https://www.ncbi.nlm.nih.gov/pubmed/23550066) | metadata signals extractable PGX data (CYP2B6*6, PK/PD-context) |
| `Rae_2002.pdf` | Rae JM et al., Triethylenethiophosphoramide is a speci…, Drug metabolism and disposi… (2002) | pgx | 7 | [10.1124/dmd.30.5.525](https://doi.org/10.1124/dmd.30.5.525) | [11950782](https://www.ncbi.nlm.nih.gov/pubmed/11950782) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Ramírez_2004.pdf` | Ramírez J et al., CYP2B6, CYP3A4, and CYP2C19 are respons…, Drug metabolism and disposi… (2004) | pgx | 7 | not captured | [15319333](https://www.ncbi.nlm.nih.gov/pubmed/15319333) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Richter_2005.pdf` | Richter T et al., Inhibition of human CYP2B6 by N,N',N''-…, Biochemical pharmacology (2005) | pgx | 7 | [10.1016/j.bcp.2004.10.008](https://doi.org/10.1016/j.bcp.2004.10.008) | [15652242](https://www.ncbi.nlm.nih.gov/pubmed/15652242) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Seo_2008.pdf` | Seo KA et al., The monoterpenoids citral and geraniol…, Chemico-biological interact… (2008) | pgx | 7 | [10.1016/j.cbi.2008.06.003](https://doi.org/10.1016/j.cbi.2008.06.003) | [18611395](https://www.ncbi.nlm.nih.gov/pubmed/18611395) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Ward_2003.pdf` | Ward BA et al., The cytochrome P450 2B6 (CYP2B6) is the…, The Journal of pharmacology… (2003) | pgx | 7 | [10.1124/jpet.103.049601](https://doi.org/10.1124/jpet.103.049601) | [12676886](https://www.ncbi.nlm.nih.gov/pubmed/12676886) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Ekhart_2008.pdf` | Ekhart C et al., Relations between polymorphisms in drug…, Pharmacogenetics and genomi… (2008) | pgx | 5 | [10.1097/FPC.0b013e328313aaa4](https://doi.org/10.1097/FPC.0b013e328313aaa4) | [18854779](https://www.ncbi.nlm.nih.gov/pubmed/18854779) | metadata signals extractable PGX data (CYP2B6) |
| `Zhou_2018.pdf` | Zhou X et al., CYP1A1 genetic polymorphism is a promis…, Cancer chemotherapy and pha… (2018) | pgx | 5 | [10.1007/s00280-017-3500-9](https://doi.org/10.1007/s00280-017-3500-9) | [29242966](https://www.ncbi.nlm.nih.gov/pubmed/29242966) | metadata signals extractable PGX data (CYP1A1) |

<sub>queue written 2026-10-07T16:31:56.466344+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aversa_1998 | not_relevant | 0 | 0 | The paper reports clinical outcomes (engraftment, relapse, survival) following a transplant regimen containing thiotepa, but it does not report any pharmacokinetic or pharmacodynamic parameters of thiotepa or any gene-variant-specific effects on these parameters. |
| PGx | Aversa_2002 | not_relevant | 0 | 0 | The paper reports clinical outcomes of haploidentical stem cell transplantation and discusses NK cell alloreactivity; it does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of thiotepa. |
| PGx | Bae_2013 | not_relevant | 0 | 0 | The study evaluates sibutramine as a CYP2B6 inhibitor and does not report pharmacogenomic effects on thiotepa PK/PD. |
| PGx | Ben_2021 | not_relevant | 3 | 5 | The paper is a review focused on busulfan, treosulfan, and clofarabine; while it mentions thiotepa as a conditioning agent, it does not report pharmacogenomic data or PK/PD parameters specific to thiotepa. |
| popPK | Ben_2026 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and outcomes; thiotepa is only listed as a co-administered conditioning agent. |
| popPK | Chen_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cyclophosphamide, with thiotepa only mentioned as a co-administered agent for which no parameters are reported. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes (engraftment, survival, GVHD) for a conditioning regimen but does not report any pharmacogenomic analysis or specific PK/PD parameter changes for thiotepa linked to gene variants. |
| PGx | Ekhart_2008 | not_relevant | 1 | 0 | The study reports associations between ALDH1A1 and ALDH3A1 genotypes and clinical toxicity endpoints (liver toxicity, haemorrhagic cystitis), not the pharmacokinetic (e.g., AUC) or pharmacodynamic (e.g., enzyme activity) parameters of thiotepa itself. |
| PGx | Ekhart_2008_2 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclophosphamide and 4-hydroxycyclophosphamide, not thiotepa. |
| popPK | Ekhart_2009 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PGx | Ganesan_2009 | not_relevant | 0 | 0 | The paper studies primaquine toxicity and mentions thiotepa only as a CYP2B6 inhibitor, not as the drug of interest for PK/PD pharmacogenomics. |
| PGx | Gor_2010 | not_relevant | 0 | 0 | The paper reports associations between gene variants and survival outcomes (DFS/OS) for a chemotherapy regimen containing thiotepa, but it does not measure or report changes in specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters of thiotepa itself. |
| popPK | Huitema_2001_2 | irrelevant | 0 | 0 | The study models the pharmacokinetics of cyclophosphamide and its metabolites, with thiotepa acting only as an inhibitor in the drug-drug interaction, and reports no quantitative PK parameters for thiotepa itself. |
| popPK | Huitema_2002 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of thiotepa in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text excerpt. |
| PGx | Jacobson_2002 | not_relevant | 1 | 0 | The paper identifies the enzymes (CYP3A4, CYP2B6) involved in thiotepa metabolism in vitro but does not report data on gene variants or their effect on PK/PD parameters. |
| PGx | Li_2013 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of ketamine metabolism, not thiotepa. |
| PGx | Miyazawa_2006 | not_relevant | 0 | 0 | The paper studies the metabolism of fenchone, not thiotepa; thiotepa is only mentioned as an inhibitor in the context of CYP2A6/2B6 activity. |
| PGx | Miyazawa_2007 | not_relevant | 0 | 0 | The paper investigates the metabolism of (-)-fenchone, not thiotepa, and thiotepa is only mentioned as an inhibitor. |
| PGx | Nakahashi_2015 | not_relevant | 0 | 0 | The paper investigates the metabolism of rose oxide by CYP enzymes, not the pharmacokinetics or pharmacodynamics of thiotepa. |
| PGx | Ocanto_2020 | not_relevant | 0 | 0 | The paper describes the clinical feasibility and outcomes of a TLI-based conditioning regimen for haploidentical transplantation and does not report any pharmacogenomic associations or effects on thiotepa pharmacokinetics or pharmacodynamics. |
| PGx | Pai_2024 | not_relevant | 4 | 2 | The study focuses on treosulfan pharmacogenomics (GSTA1/NQO1 effects on treosulfan/metabolite AUC), not thiotepa. |
| PGx | Rae_2002 | not_relevant | 0 | 0 | The paper identifies thiotepa as an inhibitor of CYP2B6, affecting cyclophosphamide metabolism, but does not report pharmacogenomic effects of genetic variants on thiotepa's own PK or PD. |
| PGx | Ramírez_2004 | not_relevant | 0 | 0 | The paper investigates the metabolism of meperidine, not thiotepa. |
| PGx | Richter_2005 | not_relevant | 0 | 0 | The paper reports mechanism-based inhibition of CYP2B6 by thiotepa, not a pharmacogenomic effect where a patient's gene variant changes thiotepa's PK/PD. |
| PGx | Seo_2008 | not_relevant | 1 | 0 | The paper discusses citral and geraniol as CYP2B6 inhibitors, not the pharmacogenomics of thiotepa (thio-TEPA is only mentioned as a comparative inhibitor). |
| PGx | Song_2015 | not_relevant | 2 | 3 | The paper reports associations between CYP2B6 genotypes and survival outcomes (PFS/OS), which are clinical endpoints, rather than direct pharmacokinetic (PK) or pharmacodynamic (PD) parameters of thiotepa (such as AUC, Cmax, or drug effect on a specific biological marker). |
| PGx | Vogel_1989 | not_relevant | 1 | 0 | The study uses thiotepa as a test chemical to characterize Drosophila excision repair deficiency and mutagenicity, not to determine if a human genotype alters thiotepa's pharmacokinetics or pharmacodynamics. |
| PGx | Walsky_2007 | not_relevant | 0 | 0 | The paper investigates thiotepa's selectivity as a CYP2B6 inhibitor, not the impact of genetic variants on thiotepa's pharmacokinetics or pharmacodynamics. |
| popPK | Ward_2003 | irrelevant | 0 | 0 | no_text gate: only 209 chars of text extracted (&lt; 400) |
| PD | Ward_2003 | not_relevant | 0 | 0 | The paper focuses on efavirenz metabolism and CYP2B6 activity, not thiotepa pharmacodynamics. |
| PGx | Ward_2003 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of efavirenz and CYP2B6, containing no information regarding thiotepa. |
| popPK | Weigt_2011 | irrelevant | 0 | 0 | The study is a teratogenicity assay in zebrafish embryos and does not report pharmacokinetic disposition parameters (CL, V, T1/2) for thiotepa. |
| PGx | Wright_2015 | not_relevant | 3 | 1 | The paper is a general analysis/review identifying gaps in pharmacogenomic data for transplant conditioning agents, including thiotepa, but does not report specific quantitative effects of gene variants on thiotepa PK/PD parameters. |
| PGx | Zhou_2015 | not_relevant | 3 | 4 | The study reports an association between GSTP1 genotype and clinical outcomes (PFS), not a direct measurement of thiotepa's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zhou_2018 | not_relevant | 5 | 5 | The study reports associations between CYP1A1 genotype and clinical outcomes (PFS, OS), but does not measure or report specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., Cmax, AUC, biomarkers) of thiotepa. |
| popPK | de_2005 | irrelevant | 4 | 2 | The study performs a population PK analysis but reports only relative changes (percentages) in clearance and exposure rather than absolute quantitative parameter values (CL, V, etc.). |
| popPK | de_2005_2 | irrelevant | 2 | 0 | The study models the pharmacokinetics of cyclophosphamide and its metabolites, treating thiotepa only as a co-administered drug that inhibits cyclophosphamide activation, without reporting quantitative disposition parameters for thiotepa itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:32 UTC</sub>
