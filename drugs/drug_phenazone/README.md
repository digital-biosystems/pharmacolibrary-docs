<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;phenazone&quot;}]"></div>

# phenazone

- **generic name:** phenazone
- **ATC codes:** `N02BB01`, `S02DA03`
- **DrugBank:** [DB01435](https://go.drugbank.com/drugs/DB01435) · **PubChem:** not captured
- **groups:** approved

## About

**Description.** An analgesic and antipyretic that has been given by mouth and as ear drops. Antipyrine is often used in testing the effects of other drugs or diseases on drug-metabolizing enzymes in the liver. (From Martindale, The Extra Pharmacopoeia, 30th ed, p29)

**Indication.** Antipyrine is an analgesic often used to test effects of other drugs on liver enzymes.

In combination with benzocaine in otic solutions, antipyrine is indicated for the symptomatic relief of acute otitis media arising from various etiologies.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| antipyrine (phenazone) | parent | 188.23 | C11H12N2O | PubChem | [2206](https://pubchem.ncbi.nlm.nih.gov/compound/2206) | Wasfi_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-01 21:39 | 14:40 | 0/2/2 | 0/1/0 | 0/0/0 | 110,140/18,798 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 5/2 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">monkey</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Doyle_1981_reference](drugs/drug_phenazone/Phenazone_Doyle1981_reference.md) | — | 1-compartment (no model) | 2 | Doyle E et al., Comparative pharmacokinetics of antipyr…, Toxicology (1981) | [10.1016/0300-483x(81)90097-4](https://doi.org/10.1016/0300-483x(81)90097-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Eichelbaum_1982_reference](drugs/drug_phenazone/Phenazone_Eichelbaum1982_reference.md) | — | 1-compartment (no model) | 4 | Eichelbaum M et al., Pharmacokinetics and metabolism of anti…, Arzneimittel-Forschung (1982) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fabre_1993_reference](drugs/drug_phenazone/Phenazone_Fabre1993_reference.md) | — | 1-compartment (no model) | 0 | Fabre D et al., Identification of patients with impaire…, Clinical pharmacokinetics (1993) | [10.2165/00003088-199324040-00006](https://doi.org/10.2165/00003088-199324040-00006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Wasfi_1998_reference](drugs/drug_phenazone/Phenazone_Wasfi1998_reference.md) | — | 2-compartment (no model) | 7 | Wasfi IA et al., The activity of mixed function oxidases…, Comparative biochemistry an… (1998) | [10.1016/s0742-8413(97)00200-4](https://doi.org/10.1016/s0742-8413(97)00200-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Tanaka_2017_DA_PA_ratio](drugs/drug_phenazone/pd_Tanaka_2017_DA_PA_ratio.md) | ductus arteriosus constriction ← ketoprofen · direct sigmoid Emax (Hill) effect | — | Tanaka S et al., Prediction of sustained fetal toxicity…, British journal of clinical… (2017) | [10.1111/bcp.13352](https://doi.org/10.1111/bcp.13352) |

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
- **screened:** 5  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fabre_1993.pdf` | Fabre D et al., Identification of patients with impaire…, Clinical pharmacokinetics (1993) | popPK | 10 | [10.2165/00003088-199324040-00006](https://doi.org/10.2165/00003088-199324040-00006) | [8491059](https://pubmed.ncbi.nlm.nih.gov/8491059) | The study reports quantitative population pharmacokinetic parameters (clearance mean error, precision, and interindividual standard deviation) for phenazone in humans. |
| `Wasfi_1998.pdf` | Wasfi IA et al., The activity of mixed function oxidases…, Comparative biochemistry an… (1998) | popPK | 10 | [10.1016/s0742-8413(97)00200-4](https://doi.org/10.1016/s0742-8413(97)00200-4) | [9669082](https://pubmed.ncbi.nlm.nih.gov/9669082) | The study reports quantitative PK parameters (CL, V, t1/2) for antipyrine (phenazone) in horses and camels. |
| `Doyle_1981.pdf` | Doyle E et al., Comparative pharmacokinetics of antipyr…, Toxicology (1981) | popPK | 9 | [10.1016/0300-483x(81)90097-4](https://doi.org/10.1016/0300-483x(81)90097-4) | [7268788](https://pubmed.ncbi.nlm.nih.gov/7268788) | The study reports quantitative PK parameters (Vd, t1/2) for phenazone in non-human primates, but specific numeric values for clearance are not explicitly listed in the text. |
| `Eichelbaum_1982.pdf` | Eichelbaum M et al., Pharmacokinetics and metabolism of anti…, Arzneimittel-Forschung (1982) | popPK | 9 | not captured | [7201837](https://pubmed.ncbi.nlm.nih.gov/7201837) | The study reports quantitative PK parameters (half-life, bioavailability) for phenazone in humans, but specific values for clearance (CL) and volume (V) are not explicitly listed in the provided text. |
| `Gawrońska-Szklarz_1992.pdf` | Gawrońska-Szklarz B et al., [Pharmacokinetics of phenazone after bi…, Ginekologia polska (1992) | popPK | 9 | not captured | [1305588](https://pubmed.ncbi.nlm.nih.gov/1305588) | The study reports quantitative PK parameters (AUC, half-life, clearance) for phenazone in rabbits, but the specific numeric values are not present in the provided evidence text. |
| `Brinkmann_1977.pdf` | Brinkmann HJ et al., [On the pharmacokinetics of phenazone i…, Arzneimittel-Forschung (1977) | popPK | 8 | not captured | [578756](https://pubmed.ncbi.nlm.nih.gov/578756) | The study describes a one-compartment PK model for phenazone in humans, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| `Chernyak_2016.pdf` | Chernyak YI et al., Impact of dioxins on antipyrine metabol…, Toxicology letters (2016) | pgx | 8 | [10.1016/j.toxlet.2016.04.006](https://doi.org/10.1016/j.toxlet.2016.04.006) | [27067104](https://www.ncbi.nlm.nih.gov/pubmed/27067104) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Huber_1996.pdf` | Huber R et al., Pharmacokinetics of pantoprazole in man, International journal of cl… (1996) | pgx | 7 | not captured | [8793599](https://www.ncbi.nlm.nih.gov/pubmed/8793599) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Klotz_2007.pdf` | Klotz U, Antiarrhythmics: elimination and dosage…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746120-00002](https://doi.org/10.2165/00003088-200746120-00002) | [18027986](https://www.ncbi.nlm.nih.gov/pubmed/18027986) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Matzke_2000.pdf` | Matzke GR et al., Evaluation of the influence of diabetes…, Pharmacotherapy (2000) | pgx | 7 | [10.1592/phco.20.3.182.34775](https://doi.org/10.1592/phco.20.3.182.34775) | [10678296](https://www.ncbi.nlm.nih.gov/pubmed/10678296) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Pienimäki_1997.pdf` | Pienimäki P et al., Pharmacokinetics of oxcarbazepine and c…, Epilepsia (1997) | pgx | 7 | [10.1111/j.1528-1157.1997.tb01122.x](https://doi.org/10.1111/j.1528-1157.1997.tb01122.x) | [9070593](https://www.ncbi.nlm.nih.gov/pubmed/9070593) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chernyak_2020.pdf` | Chernyak YI et al., CYP3A Polymorphism and Chronic Mercury…, Bulletin of experimental bi… (2020) | pgx | 5 | [10.1007/s10517-020-04738-4](https://doi.org/10.1007/s10517-020-04738-4) | [32146629](https://www.ncbi.nlm.nih.gov/pubmed/32146629) | metadata signals extractable PGX data (CYP3A) |

<sub>queue written 2026-10-01T21:33:36.981307+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abotaleb_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and in-vitro pharmacological evaluation of a morphine-metamizole adduct, containing no pharmacokinetic parameters for phenazone. |
| popPK | Acharya_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of chloramphenicol, not phenazone. |
| PGx | Arnold_2019 | not_relevant | 0 | 0 | The paper investigates drug transport in porcine intestine and does not mention phenazone or any pharmacogenomic effects. |
| PGx | Ashirmetov_1989 | not_relevant | 0 | 0 | The paper studies the effect of liver denervation (a physiological/surgical intervention) on phenylbutazone PK, not a genetic variant or pharmacogenomic effect. |
| PGx | Bacracheva_1997 | not_relevant | 0 | 0 | The study investigates the effect of cimetidine on metamizol (dipyrone) pharmacokinetics, not phenazone, and does not report pharmacogenomic effects on phenazone. |
| PD | Baggot_1992 | not_relevant | 1 | 0 | The text is a general review of veterinary pharmacokinetics that mentions phenazone only to compare intrinsic hepatic clearance rates between species, without providing any specific dose-response data, concentration-effect curves, or numeric PD parameters. |
| PGx | Balani_2002 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of 1-aminobenzotriazole and its inhibition of antipyrine clearance in animals, but does not report any pharmacogenomic effects (gene variants) on phenazone. |
| PGx | Ball_1992 | not_relevant | 0 | 0 | The paper investigates the metabolism of the ergot alkaloid CQA 206-291, not phenazone. |
| PGx | Bapiro_2001 | not_relevant | 0 | 0 | The paper evaluates CYP inhibition by antiparasitic drugs and does not report pharmacogenomic effects on phenazone PK/PD. |
| popPK | Bianchi_1993 | irrelevant | 0 | 0 | The study focuses on urea kinetics and liver function in cirrhosis, with phenazone (antipyrine) mentioned only as a comparator for correlation, not as the subject of PK parameter extraction. |
| PGx | Blanco_2000 | not_relevant | 0 | 0 | The paper investigates age-related differences in CYP450 activity using various substrates (e.g., antipyrine, midazolam) but does not mention phenazone or specific gene variants. |
| PGx | Breimer_1982 | not_relevant | 0 | 0 | The paper is a general review on the use of urinary metabolites for toxicology and biotransformation, discussing antipyrine (phenazone) only as a model compound without reporting specific pharmacogenomic effects on its PK/PD parameters. |
| PGx | Breimer_1985 | not_relevant | 0 | 0 | The text discusses benzodiazepines, nifedipine, and antipyrine, but does not report any pharmacogenomic effects on the PK or PD of phenazone. |
| popPK | Brinkmann_1977 | relevant | 8 | 0 | The study describes a one-compartment PK model for phenazone in humans, but no specific numeric parameter values (CL, V, ka, etc.) are present in the provided evidence. |
| PGx | Brosen_1990 | not_relevant | 0 | 0 | The paper discusses phenazone only as an inducer of P450 enzymes, not as the substrate whose PK/PD is being analyzed for genetic variation. |
| PD | Brune_2001 | not_relevant | 1 | 0 | The text is a qualitative review discussing the pharmacological properties of phenazone and COX-2 inhibitors without providing any numeric PD parameters or exposure-response data. |
| PGx | Chernyak_2016 | not_relevant | 2 | 5 | The paper reports the impact of environmental dioxin exposure and smoking on antipyrine metabolism, not a pharmacogenomic effect of a specific gene variant on a PK/PD parameter. |
| PGx | Chernyak_2020 | not_relevant | 5 | 5 | The study examines the association between CYP3A genotypes and 4-hydroxyantipyrine excretion in the context of mercury intoxication, rather than reporting a direct pharmacogenomic effect on phenazone PK/PD parameters. |
| PGx | Chernyak_2020_2 | not_relevant | 0 | 0 | The study investigates the effect of AhRR polymorphism on CYP1A2 induction using antipyrine as a probe, not phenazone. |
| popPK | Clarke_1989 | irrelevant | 0 | 0 | The study focuses on antipyrine and phenylbutazone in steers, not phenazone. |
| PD | Crooks_1976 | not_relevant | 0 | 0 | The text is a general review of pharmacokinetics in the elderly and does not contain any specific data, analysis, or numeric parameters for phenazone. |
| popPK | Cuny_1979 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of salicylates (acetylsalicylic acid), not phenazone. |
| PD | Davey_1988 | not_relevant | 0 | 0 | The paper is a review of quinolone drug interactions and does not contain any data, analysis, or parameters for phenazone. |
| PGx | DeVane_2001 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of quetiapine, not phenazone, and does not report pharmacogenomic effects. |
| PGx | Eichelbaum_1985 | not_relevant | 0 | 0 | The paper studies carbamazepine metabolism and explicitly states that its epoxidation was not correlated with the metabolism of phenazone (antipyrine). |
| PGx | Eichelbaum_1986 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of sparteine metabolism, not phenazone. |
| popPK | Elsheikh_1991 | irrelevant | 0 | 0 | The study investigates antipyrine and sulphadimidine, not phenazone. |
| PGx | Farrell_1996 | not_relevant | 0 | 0 | The paper discusses interferon therapy for hepatitis C and does not mention phenazone or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Fuenzalida_2026 | not_relevant | 0 | 0 | The paper describes a placental transport model and does not investigate pharmacogenomic effects on phenazone. |
| PD | Galtier_1996 | not_relevant | 0 | 0 | The paper focuses on hepatic drug metabolism and pharmacokinetics in sheep, does not mention phenazone, and provides no numeric pharmacodynamic parameters or exposure-response relationships. |
| popPK | Gawrońska-Szklarz_1992 | relevant | 9 | 2 | The study reports quantitative PK parameters (AUC, half-life, clearance) for phenazone in rabbits, but the specific numeric values are not present in the provided evidence text. |
| PD | Gomha_2015 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for DPP-IV inhibition and qualitative in vivo hypoglycemic effects, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50, slope) linking drug concentration to effect. |
| popPK | Greisen_1976 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Gwilt_1991 | not_relevant | 1 | 0 | The text is a review that qualitatively mentions altered dose-response in diabetes and a 20% reduction in phenazone volume of distribution, but it does not provide any numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves. |
| popPK | Higaki_2002 | irrelevant | 0 | 0 | The study focuses on transdermal delivery and intradermal disposition in rats using model drugs (antipyrine, felbinac, etc.), and phenazone is not mentioned or analyzed. |
| PGx | Huber_1996 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of pantoprazole, not phenazone, and does not report pharmacogenomic effects. |
| PGx | Huber_1996_2 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of pantoprazole, not phenazone, and does not report pharmacogenomic effects. |
| PGx | Hutson_2008 | not_relevant | 0 | 0 | The study investigates the effect of medical castration (hormonal status) on CYP3A4 activity using erythromycin, not the effect of a gene variant on phenazone pharmacokinetics. |
| PGx | Immonen_2010 | not_relevant | 0 | 0 | The paper studies the toxicokinetics of the food toxin IQ, not the drug phenazone. |
| PGx | Jürgens_2002 | not_relevant | 0 | 0 | The paper investigates the effect of acute hypoxia on CYP enzyme activity using probe drugs (sparteine, cortisol, caffeine, mephenytoin, antipyrine) and does not mention phenazone or any genetic variants. |
| PGx | Jürgens_2002_2 | not_relevant | 0 | 0 | The paper studies the effect of growth hormone on CYP activity using various probes (including antipyrine, not phenazone) and does not report pharmacogenomic effects. |
| PGx | Kalow_1982 | not_relevant | 0 | 0 | The paper discusses ethnic differences in drug metabolism using antipyrine and debrisoquine as examples, but does not report any pharmacogenomic effects on phenazone. |
| PGx | Karttunen_2010 | not_relevant | 0 | 0 | The paper studies the placental transfer of benzo(a)pyrene, not phenazone, and does not report pharmacogenomic effects on phenazone PK/PD. |
| PGx | Kearns_1993 | not_relevant | 0 | 0 | The paper reviews drug metabolism in cystic fibrosis but does not mention phenazone or report pharmacogenomic effects on its PK/PD parameters. |
| PGx | Klotz_2007 | not_relevant | 0 | 0 | The paper reviews antiarrhythmics and hepatic impairment, but does not mention phenazone or specific gene variants affecting its PK/PD. |
| popPK | Krejcie_1994 | irrelevant | 0 | 0 | The study investigates antipyrine (phenazone is a different drug, though related), not phenazone. |
| popPK | Krejcie_1996 | irrelevant | 0 | 0 | The study focuses on antipyrine (a phenazone analog) and other markers, not phenazone itself. |
| PGx | Landes_1995 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of lansoprazole and only mentions phenazone as a probe drug in a general interaction study without reporting any pharmacogenomic effects on phenazone. |
| popPK | Leece_1986 | irrelevant | 0 | 0 | The paper investigates the effects of terphenyls on rat hepatic enzymes and does not report pharmacokinetic parameters for phenazone. |
| PD | Leece_1986 | not_relevant | 0 | 0 | The paper studies the effects of terphenyls and polychlorinated terphenyls on rat hepatic enzymes, not phenazone, and does not report a pharmacodynamic exposure-response relationship for phenazone. |
| PD | Levy_1995 | not_relevant | 0 | 0 | The text is a pharmacokinetic review of dipyrone (metabolites, clearance, bioavailability) and explicitly states it does not affect the pharmacodynamic response to other drugs, without providing any concentration-effect or dose-response data for dipyrone itself. |
| popPK | Levy_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 4-methyl-amino-antipyrine (MAA), the active metabolite of dipyrone, not phenazone. |
| PGx | Lirussi_1999 | not_relevant | 0 | 0 | The paper investigates the effect of HCV genotypes on the efficacy of ursodeoxycholic acid, not the pharmacokinetics or pharmacodynamics of phenazone. |
| popPK | Lockwood_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of antipyrine in rats, not phenazone. |
| PGx | Marques_2002 | not_relevant | 0 | 0 | The study investigates the metabolic pathway of albendazole using antipyrine as a marker in patients with neurocysticercosis, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of phenazone. |
| PGx | Matzke_2000 | not_relevant | 0 | 0 | The study investigates the effect of diabetes mellitus (a disease state) on antipyrine metabolism, not the effect of a gene variant or genotype. |
| PGx | Michael_2012 | not_relevant | 0 | 0 | The paper investigates docetaxel pharmacokinetics and uses antipyrine (not phenazone) as a probe, with no mention of phenazone or specific gene variants. |
| PGx | Miller_1985 | not_relevant | 0 | 0 | The paper investigates the pharmacogenetics of theophylline and antipyrine, not phenazone. |
| PGx | Murdock_1975 | not_relevant | 0 | 0 | The paper studies antipyrine (phenazone) pharmacokinetics in infants but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Muñoz_2005 | irrelevant | 0 | 0 | The study focuses on ritonavir in rats, not phenazone. |
| popPK | Nagai_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paroxetine, not phenazone. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | The study focuses on antipyrine, metoprolol, and atenolol, not phenazone. |
| popPK | Nakayama_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine, not phenazone. |
| PD | Nishio_2005 | not_relevant | 2 | 1 | The paper analyzes the correlation between a CYP450 activity marker (antipyrine clearance) and toxicity, but does not report a pharmacodynamic model or numeric PD parameters (e.g., Emax, EC50) for phenazone or the chemotherapy agents. |
| popPK | Ohnhaus_1976 | irrelevant | 0 | 0 | The study focuses on pindolol, using antipyrine (phenazone) only as a probe drug for liver function, and no specific quantitative PK parameters for phenazone are reported in the evidence. |
| PD | Park_1990 | not_relevant | 1 | 0 | The text is a review discussing methods for assessing enzyme induction/inhibition and mentions the need for PK/PD studies, but it does not report any specific data, analysis, or numeric PD parameters for phenazone. |
| PD | Philip_2024 | not_relevant | 0 | 0 | The paper focuses on molecular docking and simulation of pyrazolone ligands and reports an IC50 for a specific compound (APAU) against MCF-7 cells, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for phenazone. |
| PGx | Pienimäki_1997 | not_relevant | 0 | 0 | The paper studies oxcarbazepine and carbamazepine, not phenazone, and does not report pharmacogenomic effects. |
| popPK | Preiss_1985 | irrelevant | 0 | 0 | The study focuses on adriamycin and antipyrine (phenazone is not the subject drug, and antipyrine is a different compound), so it does not report PK parameters for phenazone. |
| PGx | Rahi_2007 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of quetiapine, not phenazone. |
| PGx | Ranek_1993 | not_relevant | 0 | 0 | The paper investigates drug metabolism (antipyrine, metronidazole, etc.) in subjects with halothane hepatitis but does not mention phenazone. |
| popPK | Reilly_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amobarbital in dogs, with phenazone (antipyrine) mentioned only as a secondary probe for enzyme induction, not as the subject drug. |
| PGx | Roques_2012 | not_relevant | 0 | 0 | The paper studies the effects of fipronil and fipronil sulfone on thyroid hormone clearance and enzyme induction in rats, not the pharmacogenomics of phenazone. |
| PGx | Sandström_1998 | not_relevant | 0 | 0 | The paper studies verapamil, not phenazone, and does not report pharmacogenomic effects. |
| PGx | Shah_2016 | not_relevant | 0 | 0 | The paper describes a high-throughput assay for measuring metabolic stability (CLint) of various compounds, including antipyrine (phenazone), but does not report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Shintaku_2007 | irrelevant | 0 | 0 | The study focuses on salicylic acid and antipyrine, not phenazone. |
| PD | Steinijans_1994 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PD | Steinijans_1996 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PD | Steinijans_1996_2 | not_relevant | 0 | 0 | The paper is a review of pantoprazole drug interactions and does not report any pharmacodynamic or exposure-response data for phenazone. |
| popPK | Tanaka_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ketoprofen, not phenazone. |
| PGx | Ueyama_2007 | not_relevant | 0 | 0 | The paper investigates the effect of diabetes on diazinon toxicity and antipyrine clearance, not the effect of a gene variant on phenazone. |
| popPK | Varma_1985 | irrelevant | 0 | 0 | The study focuses on antipyrine and aminoisobutyric acid in rats, not phenazone. |
| PGx | Veid_2011 | not_relevant | 0 | 0 | The paper studies the effect of ethanol on the placental transfer of nicotine and carcinogens, not the pharmacogenomics of phenazone. |
| PD | Venkataramanan_1989 | not_relevant | 1 | 0 | The text is a review that mentions phenazone (antipyrine) only as a probe for oxidative metabolism, stating kinetics are normal, but provides no numeric PD parameters or exposure-response data. |
| PD | Vesell_1983 | not_relevant | 0 | 0 | The paper is a review of methods for assessing pharmacokinetic variability using antipyrine and does not report any pharmacodynamic or exposure-response data for phenazone. |
| PGx | Vetticaden_1988 | not_relevant | 0 | 0 | The text is a general review of pharmacogenetics and does not report specific data or effects for phenazone. |
| popPK | Winne_1987 | irrelevant | 0 | 0 | The study focuses on pre-epithelial diffusion resistance in rats using various probe substances, and phenazone is not mentioned or studied. |
| PGx | Yeung_2011 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP2C9 by a polysaccharide peptide (PSP) using tolbutamide as a probe substrate, not the pharmacokinetics or pharmacodynamics of phenazone. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for phenazone. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving macrolides and mentions phenazone only as a rare interaction partner, without reporting any pharmacogenomic effects or specific PK/PD parameter changes. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-01 21:33 UTC</sub>
