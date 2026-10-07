<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;phenazone&quot;}]"></div>

# phenazone

- **generic name:** phenazone
- **ATC codes:** `N02BB01`, `S02DA03`
- **DrugBank:** [DB01435](https://go.drugbank.com/drugs/DB01435) · **PubChem:** not captured
- **groups:** approved

## About

Phenazone (antipyrine) is a pyrazolone painkiller and fever reducer used for pain and ear conditions such as middle ear inflammation. It remains an approved medicine, used mainly in ear drops for ear pain, though it is no longer a common general painkiller.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415578](https://www.wikidata.org/wiki/Q415578) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| antipyrine (phenazone) | parent | 188.23 | C11H12N2O | PubChem | [2206](https://pubchem.ncbi.nlm.nih.gov/compound/2206) | Wasfi_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:02 | 2:13 | 0/4/0 | 0/0/0 | 0/0/0 | 132,655/8,986 | einfracz / qwen3.8-27b | 8 | 5/2 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Doyle_1981_reference](drugs/drug_phenazone/Phenazone_Doyle1981_reference.md) | — | 1-compartment (no model) | 0 | Doyle E et al., Comparative pharmacokinetics of antipyr…, Toxicology (1981) | [10.1016/0300-483x(81)90097-4](https://doi.org/10.1016/0300-483x(81)90097-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Eichelbaum_1982_reference](drugs/drug_phenazone/Phenazone_Eichelbaum1982_reference.md) | — | 1-compartment (no model) | 0 | Eichelbaum M et al., Pharmacokinetics and metabolism of anti…, Arzneimittel-Forschung (1982) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fabre_1993_reference](drugs/drug_phenazone/Phenazone_Fabre1993_reference.md) | — | 1-compartment (no model) | 0 | Fabre D et al., Identification of patients with impaire…, Clinical pharmacokinetics (1993) | [10.2165/00003088-199324040-00006](https://doi.org/10.2165/00003088-199324040-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wasfi_1998_reference](drugs/drug_phenazone/Phenazone_Wasfi1998_reference.md) | — | 2-compartment (no model) | 7 | Wasfi IA et al., The activity of mixed function oxidases…, Comparative biochemistry an… (1998) | [10.1016/s0742-8413(97)00200-4](https://doi.org/10.1016/s0742-8413(97)00200-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=phenazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2C18 (substrate), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 230 matched, 151 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brinkmann_1977.pdf` | Brinkmann HJ et al., [On the pharmacokinetics of phenazone i…, Arzneimittel-Forschung (1977) | popPK | 10 | not captured | [578756](https://pubmed.ncbi.nlm.nih.gov/578756) | The paper describes a pharmacokinetic study of phenazone in humans using a one-compartment model, but no numeric parameter values are present in the provided evidence. |
| `Doyle_1981.pdf` | Doyle E et al., Comparative pharmacokinetics of antipyr…, Toxicology (1981) | popPK | 9 | [10.1016/0300-483x(81)90097-4](https://doi.org/10.1016/0300-483x(81)90097-4) | [7268788](https://pubmed.ncbi.nlm.nih.gov/7268788) | The study reports phenazone PK parameters (half-life, volume of distribution percentage) in non-human primates, but specific numeric values for clearance and absolute volume are not fully detailed in the text, only percentages and ranges. |
| `Eichelbaum_1982.pdf` | Eichelbaum M et al., Pharmacokinetics and metabolism of anti…, Arzneimittel-Forschung (1982) | popPK | 9 | not captured | [7201837](https://pubmed.ncbi.nlm.nih.gov/7201837) | The abstract reports key parameters (half-life, bioavailability) for phenazone in humans, though detailed compartmental values (CL, V) are likely in the full text not fully provided here. |
| `Gawrońska-Szklarz_1992.pdf` | Gawrońska-Szklarz B et al., [Pharmacokinetics of phenazone after bi…, Ginekologia polska (1992) | popPK | 9 | not captured | [1305588](https://pubmed.ncbi.nlm.nih.gov/1305588) | The study reports a two-compartment model for phenazone in rabbits, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Fabre_1993.pdf` | Fabre D et al., Identification of patients with impaire…, Clinical pharmacokinetics (1993) | popPK | 8 | [10.2165/00003088-199324040-00006](https://doi.org/10.2165/00003088-199324040-00006) | [8491059](https://pubmed.ncbi.nlm.nih.gov/8491059) | The abstract reports population-level mean error and standard deviation for phenazone clearance in humans, providing quantitative PK parameters despite the lack of a full parameter table. |
| `Chernyak_2016.pdf` | Chernyak YI et al., Impact of dioxins on antipyrine metabol…, Toxicology letters (2016) | pgx | 8 | [10.1016/j.toxlet.2016.04.006](https://doi.org/10.1016/j.toxlet.2016.04.006) | [27067104](https://www.ncbi.nlm.nih.gov/pubmed/27067104) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Huber_1996.pdf` | Huber R et al., Pharmacokinetics of pantoprazole in man, International journal of cl… (1996) | pgx | 7 | not captured | [8793599](https://www.ncbi.nlm.nih.gov/pubmed/8793599) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Klotz_2007.pdf` | Klotz U, Antiarrhythmics: elimination and dosage…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746120-00002](https://doi.org/10.2165/00003088-200746120-00002) | [18027986](https://www.ncbi.nlm.nih.gov/pubmed/18027986) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Matzke_2000.pdf` | Matzke GR et al., Evaluation of the influence of diabetes…, Pharmacotherapy (2000) | pgx | 7 | [10.1592/phco.20.3.182.34775](https://doi.org/10.1592/phco.20.3.182.34775) | [10678296](https://www.ncbi.nlm.nih.gov/pubmed/10678296) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Pienimäki_1997.pdf` | Pienimäki P et al., Pharmacokinetics of oxcarbazepine and c…, Epilepsia (1997) | pgx | 7 | [10.1111/j.1528-1157.1997.tb01122.x](https://doi.org/10.1111/j.1528-1157.1997.tb01122.x) | [9070593](https://www.ncbi.nlm.nih.gov/pubmed/9070593) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chernyak_2020.pdf` | Chernyak YI et al., CYP3A Polymorphism and Chronic Mercury…, Bulletin of experimental bi… (2020) | pgx | 5 | [10.1007/s10517-020-04738-4](https://doi.org/10.1007/s10517-020-04738-4) | [32146629](https://www.ncbi.nlm.nih.gov/pubmed/32146629) | metadata signals extractable PGX data (CYP3A) |

<sub>queue written 2026-10-07T07:00:25.552958+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abotaleb_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and receptor binding/pharmacological evaluation of a morphine-metamizole adduct (metamorphine), not the pharmacokinetic disposition of phenazone. |
| popPK | Acharya_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chloramphenicol, not phenazone (antipyrine, a metabolite of phenazone, is only used as a diagnostic marker for liver function). |
| PGx | Arnold_2019 | not_relevant | 0 | 0 | The paper does not mention phenazone; it uses antipyrine (a structural isomer) as a reference drug in a porcine Ussing chamber study. |
| PGx | Ashirmetov_1989 | not_relevant | 0 | 0 | The paper studies liver denervation in rats, not a pharmacogenomic variant, and does not report data for phenazone. |
| PGx | Bacracheva_1997 | not_relevant | 0 | 0 | The paper studies metamizol (dipyrone) and cimetidine, not phenazone. |
| PD | Baggot_1992 | not_relevant | 1 | 0 | The text is a general review of veterinary pharmacokinetics that mentions phenazone only to compare intrinsic hepatic clearance rates between species, without providing any specific dose-response data, concentration-effect curves, or numeric PD parameters. |
| PGx | Balani_2002 | not_relevant | 0 | 0 | The paper studies non-genetic pharmacodynamic inhibition of antipyrine (phenazone) clearance by 1-aminobenzotriazole in animals, not a pharmacogenomic effect. |
| PGx | Ball_1992 | not_relevant | 0 | 0 | The paper studies the metabolism of CQA 206-291 by CYP3A4, not phenazone. |
| PGx | Bapiro_2001 | not_relevant | 0 | 0 | The paper evaluates CYP inhibition by antiparasitic drugs using in vitro assays and does not involve phenazone or pharmacogenomic effects. |
| popPK | Bianchi_1993 | irrelevant | 0 | 0 | The study focuses on urea/alanine kinetics for liver function assessment and mentions antipyrine (phenazone) clearance only as a correlation reference without providing specific phenazone PK model parameters. |
| PGx | Blanco_2000 | not_relevant | 0 | 0 | The study examines age-related differences in CYP activity, not a pharmacogenomic effect of a gene variant, and does not specifically report on phenazone. |
| PGx | Breimer_1985 | not_relevant | 0 | 0 | The paper discusses benzodiazepines, antipyrine, and nifedipine, but does not mention phenazone or any pharmacogenomic effects on its PK/PD. |
| popPK | Brinkmann_1977 | relevant | 10 | 0 | The paper describes a pharmacokinetic study of phenazone in humans using a one-compartment model, but no numeric parameter values are present in the provided evidence. |
| PGx | Brosen_1990 | not_relevant | 0 | 0 | The paper discusses CYP2D6 polymorphisms and their effect on other drugs, mentioning phenazone only as an example of an uninducible compound, without reporting any pharmacogenomic effects on phenazone's own PK/PD. |
| PD | Brune_2001 | not_relevant | 1 | 0 | The text is a qualitative review discussing the pharmacological properties of phenazone and COX-2 inhibitors without providing any numeric PD parameters or exposure-response data. |
| PGx | Chernyak_2016 | not_relevant | 2 | 2 | The paper focuses on the environmental impact of dioxins on antipyrine metabolism, and although CYP1A2 genotypes were collected, no pharmacokinetic effect of the genotype is reported. |
| PGx | Chernyak_2020 | not_relevant | 4 | 3 | The study reports a trend in 4-hydroxyantipyrine excretion associated with CYP3A genotypes in a context of mercury intoxication, but it uses a surrogate metabolite rather than measuring the PK/PD parameters of phenazone itself. |
| PGx | Chernyak_2020_2 | not_relevant | 2 | 5 | The study examines the effect of an AhRR polymorphism on CYP1A2 activity using antipyrine (phenazone) as a probe, but it focuses on dioxin-dependent induction and susceptibility rather than reporting a baseline or treatment-induced pharmacokinetic or pharmacodynamic effect of phenazone itself. |
| popPK | Clarke_1989 | irrelevant | 0 | 0 | The study focuses on antipyrine and phenylbutazone, not phenazone, although antipyrine is a metabolite of phenazone, the parent drug is not the subject of the PK characterization. |
| PD | Crooks_1976 | not_relevant | 0 | 0 | The text is a general review of pharmacokinetics in the elderly and does not contain any specific data, analysis, or numeric parameters for phenazone. |
| popPK | Cuny_1979 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of acetylsalicylic acid (aspirin/salicylates), not phenazone. |
| PD | Davey_1988 | not_relevant | 0 | 0 | The paper is a review of quinolone drug interactions and does not contain any data, analysis, or parameters for phenazone. |
| PGx | DeVane_2001 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of quetiapine and does not report pharmacogenomic effects on phenazone. |
| PGx | Eichelbaum_1985 | not_relevant | 0 | 0 | The paper studies carbamazepine, not phenazone. |
| PGx | Eichelbaum_1986 | not_relevant | 0 | 0 | The paper describes pharmacogenomics for sparteine, not phenazone. |
| popPK | Elsheikh_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine and sulphadimidine, not phenazone. |
| PGx | Farrell_1996 | not_relevant | 0 | 0 | The paper studies interferon therapy for hepatitis C and does not mention phenazone or any gene variants affecting its PK/PD. |
| PGx | Fuenzalida_2026 | not_relevant | 0 | 0 | The paper focuses on an in vitro placental transport model and does not mention phenazone or any pharmacogenomic effects on PK/PD parameters. |
| PD | Galtier_1996 | not_relevant | 0 | 0 | The paper focuses on hepatic drug metabolism and pharmacokinetics in sheep, does not mention phenazone, and provides no numeric pharmacodynamic parameters or exposure-response relationships. |
| popPK | Gawrońska-Szklarz_1992 | relevant | 9 | 2 | The study reports a two-compartment model for phenazone in rabbits, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PD | Gomha_2015 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for DPP-IV inhibition and qualitative in vivo hypoglycemic effects, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50, slope) linking drug concentration to effect. |
| popPK | Greisen_1976 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Gwilt_1991 | not_relevant | 1 | 0 | The text is a review that qualitatively mentions altered dose-response in diabetes and a 20% reduction in phenazone volume of distribution, but it does not provide any numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves. |
| popPK | Higaki_2002 | irrelevant | 1 | 0 | The study focuses on antipyrine (phenazone's isomer) and other model drugs, does not identify phenazone as a subject drug, and lacks extractable numeric PK values in the evidence. |
| PGx | Huber_1996 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of pantoprazole, not phenazone, and does not report pharmacogenomic effects on phenazone parameters. |
| PGx | Huber_1996_2 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of pantoprazole, not phenazone, and does not investigate gene variants. |
| PGx | Hutson_2008 | not_relevant | 0 | 0 | The study investigates the effect of medical castration on CYP3A4 activity using erythromycin as a probe, not the effect of gene variants on phenazone PK/PD. |
| PGx | Immonen_2010 | not_relevant | 0 | 0 | The study investigates the toxicokinetics of the food-borne carcinogen IQ, not phenazone. |
| PGx | Jürgens_2002 | not_relevant | 0 | 0 | The paper investigates the effect of acute hypoxia on CYP enzyme activity, not the effect of genetic variants on phenazone pharmacokinetics. |
| PGx | Jürgens_2002_2 | not_relevant | 0 | 0 | The paper studies the effect of growth hormone on CYP activity markers and does not involve phenazone (antipyrine) or pharmacogenomic variants. |
| PGx | Kalow_1982 | not_relevant | 0 | 0 | The paper discusses general ethnic differences in drug metabolism using antipyrine (not phenazone) and debrisoquine, without reporting specific pharmacogenomic effects on PK/PD parameters for phenazone. |
| PGx | Karttunen_2010 | not_relevant | 0 | 0 | The paper focuses on the placental transfer and DNA binding of benzo(a)pyrene, not on the pharmacogenomics of phenazone or its PK/PD parameters. |
| PGx | Kearns_1993 | not_relevant | 0 | 0 | The paper does not mention phenazone (antipyrine) or specific gene variants affecting its PK/PD parameters. |
| PGx | Klotz_2007 | not_relevant | 0 | 0 | The paper discusses antiarrhythmics and phenazone (antipyrine) only as a probe drug for liver function, not regarding pharmacogenomic effects. |
| popPK | Krejcie_1994 | irrelevant | 2 | 0 | The study models the pharmacokinetics of antipyrine (phenazone), not a metabolite or a different drug, but the provided evidence does not contain specific clearance, volume, or half-life values for phenazone itself, focusing instead on tissue compartment parameters. |
| popPK | Krejcie_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of extracellular and total body water markers (inulin and antipyrine) in dogs, not phenazone. |
| PGx | Landes_1995 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of lansoprazole and mentions phenazone only as a probe drug for interaction studies, without reporting any pharmacogenomic effects on phenazone's PK/PD parameters. |
| popPK | Leece_1986 | irrelevant | 0 | 0 | The study focuses on the induction of hepatic enzymes by terphenyls in rats and does not report pharmacokinetic parameters for phenazone. |
| PD | Leece_1986 | not_relevant | 0 | 0 | The paper studies the effects of terphenyls and polychlorinated terphenyls on rat hepatic enzymes, not phenazone, and does not report a pharmacodynamic exposure-response relationship for phenazone. |
| PD | Levy_1995 | not_relevant | 0 | 0 | The text is a pharmacokinetic review of dipyrone (metabolites, clearance, bioavailability) and explicitly states it does not affect the pharmacodynamic response to other drugs, without providing any concentration-effect or dose-response data for dipyrone itself. |
| popPK | Levy_2010 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of 4-methyl-amino-antipyrine, which is the active metabolite of dipyrone, not phenazone (aminopyrine). |
| PGx | Lirussi_1999 | not_relevant | 0 | 0 | The paper investigates the efficacy of ursodeoxycholic acid and mentions antipyrine clearance as a general liver function test, but it does not report a pharmacogenomic effect on phenazone. |
| popPK | Lockwood_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine (phenazone's structural isomer/analogue, but a distinct chemical entity) in rats, not phenazone itself. |
| PGx | Marques_2002 | not_relevant | 0 | 0 | The paper investigates CYP450 involvement in albendazole and antipyrine metabolism in patients with neurocysticercosis but does not report any association with gene variants, genotypes, or phenotypes. |
| PGx | Matzke_2000 | not_relevant | 0 | 0 | The study focuses on antipyrine (a metabolite of phenazone) and disease effects, not pharmacogenomics of phenazone. |
| PGx | Michael_2012 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of docetaxel and its correlation with antipyrine clearance, and does not investigate phenazone. |
| PGx | Miller_1985 | not_relevant | 2 | 10 | The paper investigates the pharmacogenetics of theophylline (not phenazone), although phenazone/antipyrine is mentioned as a co-metabolite for validation, the primary data does not report phenazone PK changes based on genotype. |
| PGx | Murdock_1975 | not_relevant | 0 | 0 | The paper investigates antipyrine pharmacokinetics in infants and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Muñoz_2005 | irrelevant | 0 | 0 | The study investigates the intestinal absorption of ritonavir (and antipyrine) in rats, not phenazone. |
| popPK | Nagai_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paroxetine, not phenazone. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The study focuses on antipyrine (a distinct structural analog often confused with phenazone but not the subject drug), metoprolol, and atenolol, and does not report pharmacokinetic parameters for phenazone. |
| popPK | Nakayama_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine in rats, not phenazone. |
| PD | Nishio_2005 | not_relevant | 2 | 1 | The paper analyzes the correlation between a CYP450 activity marker (antipyrine clearance) and toxicity, but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for phenazone or the chemotherapy agents. |
| popPK | Ohnhaus_1976 | irrelevant | 2 | 0 | The paper focuses on pindolol pharmacokinetics, using antipyrine (phenazone) only as a hepatic probe/comparator, and no numeric PK values for antipyrine are provided in the text. |
| PD | Park_1990 | not_relevant | 1 | 0 | The text is a review discussing methods for assessing enzyme induction/inhibition and mentions the need for PK/PD studies, but it does not report any specific data, analysis, or numeric PD parameters for phenazone. |
| PD | Philip_2024 | not_relevant | 0 | 0 | The paper focuses on molecular docking and simulation of pyrazolone ligands and reports an IC50 for a specific compound (APAU) against MCF-7 cells, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for phenazone. |
| PGx | Pienimäki_1997 | not_relevant | 0 | 0 | The study investigates placental metabolism of oxcarbazepine and carbamazepine, not phenazone, and does not report pharmacogenomic effects. |
| popPK | Preiss_1985 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of antipyrine (phenazone) only as a probe drug to assess liver function for dosing adriamycin, not as the subject of a primary PK study. |
| PGx | Rahi_2007 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of quetiapine, not phenazone. |
| PGx | Ranek_1993 | not_relevant | 0 | 0 | The paper investigates drug metabolism in subjects with halothane hepatitis but does not involve phenazone or report pharmacogenomic effects for it. |
| popPK | Reilly_1978 | irrelevant | 1 | 0 | The study focuses on amobarbital pharmacokinetics in dogs, with antipyrine (phenazone) used only as a probe for enzyme induction without reporting specific quantitative PK parameters for antipyrine. |
| PGx | Roques_2012 | not_relevant | 0 | 0 | The study investigates the effects of fipronil and its metabolite in rats on thyroid function and enzyme induction, but it does not involve phenazone or any pharmacogenomic analysis of gene variants affecting PK/PD parameters. |
| PGx | Sandström_1998 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of verapamil, not phenazone. |
| PGx | Shah_2016 | not_relevant | 0 | 0 | The paper describes a generic high-throughput assay for CYP3A4 metabolic stability and does not report pharmacogenomic effects on phenazone PK/PD parameters. |
| popPK | Shintaku_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of salicylic acid and antipyrine, not phenazone. |
| PD | Steinijans_1994 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PD | Steinijans_1996 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PD | Steinijans_1996_2 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| popPK | Tanaka_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for ketoprofen, not phenazone. |
| PGx | Ueyama_2007 | not_relevant | 0 | 0 | The paper studies diazinon toxicity and antipyrine clearance in diabetic rats, not the effect of gene variants on phenazone pharmacokinetics or pharmacodynamics. |
| popPK | Varma_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine and aminoisobutyric acid in rats, not phenazone. |
| PGx | Veid_2011 | not_relevant | 0 | 0 | The paper investigates the effect of ethanol on placental transfer of nicotine and carcinogens, and does not mention phenazone or any pharmacogenomic analysis. |
| PD | Venkataramanan_1989 | not_relevant | 1 | 0 | The text is a review that mentions phenazone (antipyrine) only as a probe for oxidative metabolism, stating kinetics are normal, but provides no numeric PD parameters or exposure-response data. |
| PD | Vesell_1983 | not_relevant | 0 | 0 | The paper is a review of methods for assessing pharmacokinetic variability using antipyrine and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PGx | Vesell_1986 | not_relevant | 5 | 7 | The paper investigates factors influencing antipyrine metabolism, not phenazone. |
| PGx | Vetticaden_1988 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic principles using antipyrine (not phenazone) as an example and contains no specific data on phenazone PK/PD. |
| popPK | Wasfi_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine (phenazone is not the subject drug), comparing horses and camels. |
| popPK | Winne_1987 | irrelevant | 0 | 0 | The study measures the permeation of aminopyrine (a common analogue for phenazone but a distinct chemical entity) in an in-vitro/in-situ rat model, not the systemic pharmacokinetics of phenazone. |
| PGx | Yeung_2011 | not_relevant | 0 | 0 | The paper studies inhibition of CYP2C9 by Coriolus versicolor extracts, not the pharmacokinetics of phenazone or genetic effects on phenazone. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for phenazone. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving macrolides and lists phenazone as a drug with rare interactions, but it does not report any pharmacogenomic effects (gene variants) on phenazone's PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:00 UTC</sub>
