<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Trimethadione&quot;}]"></div>

# Trimethadione

- **generic name:** Trimethadione
- **T3DB:** [T3D2760](http://www.t3db.ca/toxins/T3D2760) · **DrugBank:** [DB00347](https://go.drugbank.com/drugs/DB00347) · **PubChem:** [CID 5576](https://pubchem.ncbi.nlm.nih.gov/compound/5576)
- **groups:** approved, withdrawn

## About

Trimethadione is only found in individuals that have used or taken this drug. It is an anticonvulsant effective in absence seizures, but generally reserved for refractory cases because of its toxicity. (From AMA Drug Evaluations Annual, 1994, p378) Trimethadione reduces T-type calcium currents in thalamic neurons, including thalamic relay neurons. It does so via the inhibition of voltage dependent T-type calcium channels. …

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** Used in the control of absence (petit mal) seizures that are refractory to treatment with other medications.
- **Mechanism of toxicity:** Dione anticonvulsants reduce T-type calcium currents in thalamic neurons, including thalamic relay neurons. It does so via the inhibition of voltage dependent T-type calcium channels. …
- **Health effects:** May cause a potentially dangerous rash that may develop into Stevens Johnson syndrome, an extremely rare but potentially fatal skin disease.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2760">T3DB T3D2760</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 127-48-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:131804">ChEBI 131804</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trimethadione | parent | 143.142 | C6H9NO3 | PubChem | [5576](https://pubchem.ncbi.nlm.nih.gov/compound/5576) | Tanaka_1987_2, Tanaka_1999 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Tanaka_1987_2_reference](drugs/toxin_trimethadione/Trimethadione_Tanaka1987v2_reference.md) | — | 1-compartment (no model) | 3 | Tanaka E et al., Age-related changes in trimethadione ox…, British journal of clinical… (1987) | [10.1111/j.1365-2125.1987.tb03058.x](https://doi.org/10.1111/j.1365-2125.1987.tb03058.x) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.70).">human + animal</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub> | [Tanaka_1999_reference](drugs/toxin_trimethadione/Trimethadione_Tanaka1999_reference.md) | — | 1-compartment (no model) | 1 | Tanaka E et al., In vivo and in vitro trimethadione oxid…, Human & experimental toxico… (1999) | [10.1177/096032719901800102](https://doi.org/10.1177/096032719901800102) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [King_1980_FEAD](drugs/toxin_trimethadione/pd_King_1980_FEAD.md) | flash-evoked afterdischarge ← trimethadione · inhibition effect | — | King GA et al., Flash-evoked afterdischarge in rat as a…, Epilepsia (1980) | [10.1111/j.1528-1157.1980.tb04304.x](https://doi.org/10.1111/j.1528-1157.1980.tb04304.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trimethadione).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1G (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 08:23 | 12:51 | 0/2/0 | 1/0/0 | 0/0/0 | 167,596/8,756 | einfracz / qwen3.8-flash-next | 8 | 7/0 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 67 matched, 67 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_17 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sakai_1991.pdf` | Sakai H et al., The effects of diltiazem on hepatic dru…, British journal of clinical… (1991) | popPK | 10 | [10.1111/j.1365-2125.1991.tb05543.x](https://doi.org/10.1111/j.1365-2125.1991.tb05543.x) | [2054276](https://pubmed.ncbi.nlm.nih.gov/2054276) | The paper reports quantitative kinetic parameters (metabolic ratio, serum concentrations) for trimethadione and its metabolite dimethadione in humans. |
| `Tanaka_1987_2.pdf` | Tanaka E et al., Age-related changes in trimethadione ox…, British journal of clinical… (1987) | popPK | 10 | [10.1111/j.1365-2125.1987.tb03058.x](https://doi.org/10.1111/j.1365-2125.1987.tb03058.x) | [3567052](https://pubmed.ncbi.nlm.nih.gov/3567052) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for trimethadione in human subjects directly in the text. |
| `Tanaka_1998.pdf` | Tanaka E et al., Changes in the enzymatic activities of…, Xenobiotica; the fate of fo… (1998) | popPK | 10 | [10.1080/004982598239218](https://doi.org/10.1080/004982598239218) | [9741958](https://pubmed.ncbi.nlm.nih.gov/9741958) | The paper reports kinetic parameters (Clearance, half-life, Volume of distribution) for trimethadione in beagle dogs, but specific numeric values for these parameters are not present in the provided abstract. |
| `Daling_1994.pdf` | Daling Z et al., Effect of E-5110, a novel non-steroidal…, Xenobiotica; the fate of fo… (1994) | popPK | 9 | [10.3109/00498259409043233](https://doi.org/10.3109/00498259409043233) | [8009884](https://pubmed.ncbi.nlm.nih.gov/8009884) | The paper reports kinetic parameters (t1/2, AUC, CL, Vd) for trimethadione in beagle dogs, but the specific numerical values for the control group (baseline kinetics) are not explicitly stated in the abstract text, only the direction of change. |
| `Kurata_1995.pdf` | Kurata N et al., Pharmacokinetic study of trimethadione…, Research communications in… (1995) | popPK | 9 |  | [7582861](https://pubmed.ncbi.nlm.nih.gov/7582861) | The paper reports a half-life for trimethadione, but the specific numeric value is given as an approximation (~3 hr) in the abstract, with detailed parameters likely in figures or full text not fully detailed in this snippet. |
| `Tanaka_1989.pdf` | Tanaka E et al., Comparison of trimethadione and antipyr…, European journal of clinica… (1989) | popPK | 9 | [10.1007/BF00637749](https://doi.org/10.1007/BF00637749) | [2776822](https://pubmed.ncbi.nlm.nih.gov/2776822) | The abstract states that clearance and half-life values for trimethadione were determined and remained the same across conditions, but the specific numerical values are not provided in the text. |
| `Tanaka_1999.pdf` | Tanaka E et al., In vivo and in vitro trimethadione oxid…, Human & experimental toxico… (1999) | popPK | 9 | [10.1177/096032719901800102](https://doi.org/10.1177/096032719901800102) | [10025363](https://pubmed.ncbi.nlm.nih.gov/10025363) | The paper reports quantitative kinetic parameters (total body clearance, plasma levels, enzyme activities) for trimethadione metabolism across multiple species, including specific correlation data. |
| `Abei_1995.pdf` | Abei M et al., Clinical significance of the trimethadi…, Journal of gastroenterology (1995) | popPK | 8 | [10.1007/BF02347564](https://doi.org/10.1007/BF02347564) | [7550858](https://pubmed.ncbi.nlm.nih.gov/7550858) | The paper reports significant kinetic parameters (clearance, half-life) for trimethadione in humans, but the specific numeric values are not present in the provided evidence, only statistical relationships. |
| `Midha_1979.pdf` | Midha KK et al., Metabolism and disposition of trimethad…, Epilepsia (1979) | popPK | 8 | [10.1111/j.1528-1157.1979.tb04822.x](https://doi.org/10.1111/j.1528-1157.1979.tb04822.x) | [477633](https://pubmed.ncbi.nlm.nih.gov/477633) | The paper reports disposition data for trimethadione and its metabolite in rats (urinary recovery, tissue concentrations), but the specific numeric values for half-lives or rates are not present in the provided abstract text. |
| `Tanaka_1982.pdf` | Tanaka E et al., Trimethadione as a model drug for the e…, Pharmacology (1982) | popPK | 8 | [10.1159/000137743](https://doi.org/10.1159/000137743) | [7146085](https://pubmed.ncbi.nlm.nih.gov/7146085) | The paper explicitly reports changes in trimethadione half-life, AUC, clearance, and volume of distribution in rats, but the specific numeric values are not included in the provided text. |
| `Tanaka_1985.pdf` | Tanaka E et al., Effects of cimetidine and ranitidine on…, Research communications in… (1985) | popPK | 8 |  | [3992022](https://pubmed.ncbi.nlm.nih.gov/3992022) | The paper reports qualitative changes in TMO half-life, AUC, clearance, and volume of distribution, but no specific numeric values for these kinetic parameters are present in the evidence. |
| `Tanaka_1985_2.pdf` | Tanaka E et al., Dose-independent pharmacokinetics of tr…, Journal of pharmaceutical s… (1985) | popPK | 8 | [10.1002/jps.2600740326](https://doi.org/10.1002/jps.2600740326) | [4009447](https://pubmed.ncbi.nlm.nih.gov/4009447) | The paper reports on trimethadione kinetics in rats, explicitly mentioning parameters like t1/2, CL, and Vd, but the actual numeric values are not present in the provided text (only statistical significance and correlations are given). |
| `Tanaka_1992.pdf` | Tanaka E et al., Simplified test for determination of dr…, Pharmacology & toxicology (1992) | popPK | 8 | [10.1111/j.1600-0773.1992.tb00452.x](https://doi.org/10.1111/j.1600-0773.1992.tb00452.x) | [1579543](https://pubmed.ncbi.nlm.nih.gov/1579543) | The paper reports quantitative kinetic parameters (half-life, clearance, Vd) for trimethadione in rats, but the specific numeric values are not present in the abstract evidence provided. |
| `Tanaka_1994_2.pdf` | Tanaka E et al., Changes in caffeine, lidocaine and trim…, Pharmacology & toxicology (1994) | popPK | 8 | [10.1111/j.1600-0773.1994.tb00338.x](https://doi.org/10.1111/j.1600-0773.1994.tb00338.x) | [7800655](https://pubmed.ncbi.nlm.nih.gov/7800655) | The paper reports pharmacokinetic parameters (half-life, volume of distribution, clearance) for trimethadione in rats, but the specific numeric values are described qualitatively (e.g., "significantly longer") in the abstract without providing the actual numbers. |
| `Noda_1990.pdf` | Noda A et al., Pancreatic excretion of dimethadione an…, Digestion (1990) | popPK | 7 | [10.1159/000200274](https://doi.org/10.1159/000200274) | [2210093](https://pubmed.ncbi.nlm.nih.gov/2210093) | The paper reports kinetic observations (plateau time, concentration ratios, clearance trends) for trimethadione and its metabolite dimethadione in dogs, but the specific numeric values for parameters are not explicitly provided in the evidence snippet. |
| `Tanaka_1989_2.pdf` | Tanaka E et al., The effect of roxatidine acetate and ci…, British journal of clinical… (1989) | popPK | 7 | [10.1111/j.1365-2125.1989.tb05411.x](https://doi.org/10.1111/j.1365-2125.1989.tb05411.x) | [2570603](https://pubmed.ncbi.nlm.nih.gov/2570603) | The paper reports quantitative kinetic parameters (clearance, half-life, volume) for trimethadione in humans, but the specific numeric values are summarized in the abstract/text without raw data tables or figures provided in the evidence snippet. |
| `Tanaka_1993.pdf` | Tanaka E et al., Comparison of hepatic drug-oxidizing ac…, Pharmacology & toxicology (1993) | popPK | 7 | [10.1111/j.1600-0773.1993.tb01335.x](https://doi.org/10.1111/j.1600-0773.1993.tb01335.x) | [8441739](https://pubmed.ncbi.nlm.nih.gov/8441739) | The study measures kinetic parameters (CL, Vd, t1/2) for trimethadione in humans, but the specific numerical values are not present in the extracted text, only mentioned as being equivalent. |

<sub>queue written 2026-11-13 08:22 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abei_1995 | relevant | 8 | 2 | The paper reports significant kinetic parameters (clearance, half-life) for trimethadione in humans, but the specific numeric values are not present in the provided evidence, only statistical relationships. |
| popPK | Barstow_1990 | irrelevant | 0 | 0 | The paper is a general review of liver function assessment methods and mentions trimethadione only conceptually as a low-extraction drug without providing any specific quantitative kinetic data or parameters. |
| popPK | Chiu_1982 | irrelevant | 0 | 0 | The paper reports a pharmacological dose-response study on anticonvulsant activity with no toxicokinetic parameters or quantitative kinetic data for trimethadione. |
| popPK | Daling_1994 | relevant | 9 | 4 | The paper reports kinetic parameters (t1/2, AUC, CL, Vd) for trimethadione in beagle dogs, but the specific numerical values for the control group (baseline kinetics) are not explicitly stated in the abstract text, only the direction of change. |
| popPK | Fabro_1982 | irrelevant | 0 | 0 | The paper reports teratogenic potency (tD50) and hazard indices (RTI) but contains no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Khera_1985 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | King_1980 | irrelevant | 0 | 0 | The paper is a pharmacodynamic dose-response study assessing seizure suppression, containing no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Kishita_1986 | irrelevant | 2 | 1 | The paper is a pharmacodynamic study on seizure suppression parameters (TE/TF ratios) in mice, where trimethadione is merely one of several comparator drugs tested; no toxicokinetic parameters (ADME, half-life, clearance) for trimethadione are reported. |
| popPK | Kobayashi_1984 | irrelevant | 0 | 0 | The provided text contains only metadata and software logs with no scientific content or data regarding trimethadione. |
| popPK | Kurata_1995 | relevant | 9 | 1 | The paper reports a half-life for trimethadione, but the specific numeric value is given as an approximation (~3 hr) in the abstract, with detailed parameters likely in figures or full text not fully detailed in this snippet. |
| PGx | Kurata_1998 | not_relevant | 2 | 0 | The study investigates the enzyme (CYP2E1) involved in trimethadione metabolism using inhibitors and correlation of activities, but does not analyze specific gene variants, genotypes, or phenotypes and their quantitative impact on PK parameters. |
| popPK | Löscher_1985 | irrelevant | 2 | 0 | The paper mentions trimethadione qualitatively as suitable for maintenance therapy due to its half-life, but reports no quantitative kinetic parameters (half-life values, clearance, etc.) in the provided evidence. |
| popPK | Midha_1979 | relevant | 8 | 2 | The paper reports disposition data for trimethadione and its metabolite in rats (urinary recovery, tissue concentrations), but the specific numeric values for half-lives or rates are not present in the provided abstract text. |
| popPK | Miller_1985 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects on choline uptake, not quantitative toxicokinetic parameters. |
| PGx | Nakamura_1994 | not_relevant | 1 | 1 | The paper identifies which cytochrome P450 isoforms metabolize trimethadione but does not report pharmacogenomic effects (gene variants or phenotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Noda_1990 | relevant | 7 | 2 | The paper reports kinetic observations (plateau time, concentration ratios, clearance trends) for trimethadione and its metabolite dimethadione in dogs, but the specific numeric values for parameters are not explicitly provided in the evidence snippet. |
| popPK | Ohashi_1991 | irrelevant | 3 | 2 | The paper focuses on antipyrine kinetics; it states there were "no significant changes" in trimethadione parameters but provides no specific numeric kinetic values (clearance, half-life, volume) for trimethadione itself. |
| popPK | Ozolinš_2015 | irrelevant | 2 | 0 | The study measures tissue concentrations rather than kinetic parameters (rates, clearance, half-life), and focuses on the metabolite DMO in an embryotoxicity context without providing quantitative kinetic data for trimethadione itself. |
| popPK | Snead_1980 | irrelevant | 0 | 0 | The paper reports on the pharmacodynamic/anticonvulsant effects of trimethadione, not any quantitative toxicokinetic parameters. |
| popPK | Snead_1982 | irrelevant | 0 | 0 | Trimethadione is only mentioned as an anticonvulsant comparator used to block GBL effects, with no toxicokinetic parameters reported for trimethadione itself. |
| popPK | Tanaka_1981 | irrelevant | 0 | 0 | The evidence contains only metadata about the document processing software (GROBID) and no scientific content or toxicokinetic data. |
| popPK | Tanaka_1982 | relevant | 8 | 1 | The paper explicitly reports changes in trimethadione half-life, AUC, clearance, and volume of distribution in rats, but the specific numeric values are not included in the provided text. |
| popPK | Tanaka_1984 | irrelevant | 2 | 0 | The paper reports pharmacokinetic parameters for trimethadione but the actual numeric values are not provided in the evidence (likely in the tables/figures not included). |
| popPK | Tanaka_1985 | relevant | 8 | 2 | The paper reports qualitative changes in TMO half-life, AUC, clearance, and volume of distribution, but no specific numeric values for these kinetic parameters are present in the evidence. |
| popPK | Tanaka_1985_2 | relevant | 8 | 2 | The paper reports on trimethadione kinetics in rats, explicitly mentioning parameters like t1/2, CL, and Vd, but the actual numeric values are not present in the provided text (only statistical significance and correlations are given). |
| popPK | Tanaka_1985_3 | irrelevant | 0 | 0 | The evidence contains only GROBID software metadata and no scientific text or data. |
| popPK | Tanaka_1985_4 | irrelevant | 0 | 0 | The provided evidence contains only OCR/GROBID metadata and no scientific text or numeric data. |
| popPK | Tanaka_1986 | irrelevant | 0 | 0 | The provided text contains only metadata and software version information with no scientific content or data on trimethadione. |
| popPK | Tanaka_1987 | irrelevant | 0 | 0 | The provided evidence is only GROBID metadata with no full text or numeric data. |
| popPK | Tanaka_1989 | relevant | 9 | 0 | The abstract states that clearance and half-life values for trimethadione were determined and remained the same across conditions, but the specific numerical values are not provided in the text. |
| popPK | Tanaka_1989_2 | relevant | 7 | 3 | The paper reports quantitative kinetic parameters (clearance, half-life, volume) for trimethadione in humans, but the specific numeric values are summarized in the abstract/text without raw data tables or figures provided in the evidence snippet. |
| popPK | Tanaka_1992 | relevant | 8 | 2 | The paper reports quantitative kinetic parameters (half-life, clearance, Vd) for trimethadione in rats, but the specific numeric values are not present in the abstract evidence provided. |
| popPK | Tanaka_1993 | relevant | 7 | 2 | The study measures kinetic parameters (CL, Vd, t1/2) for trimethadione in humans, but the specific numerical values are not present in the extracted text, only mentioned as being equivalent. |
| popPK | Tanaka_1994 | relevant | 3 | 5 | The paper measures trimethadione kinetics but finds no significant change in parameters (t1/2, Cl, AUC) due to co-administration, implying baseline kinetic values exist but are not explicitly listed as numeric results in the provided text. |
| popPK | Tanaka_1994_2 | relevant | 8 | 2 | The paper reports pharmacokinetic parameters (half-life, volume of distribution, clearance) for trimethadione in rats, but the specific numeric values are described qualitatively (e.g., "significantly longer") in the abstract without providing the actual numbers. |
| PGx | Tanaka_1996 | not_relevant | 2 | 1 | The paper focuses on liver disease as the driver of PK changes, mentioning CYP enzymes mechanistically but not reporting a specific gene variant/genotype's effect on parameters. |
| popPK | Tanaka_1998 | relevant | 10 | 2 | The paper reports kinetic parameters (Clearance, half-life, Volume of distribution) for trimethadione in beagle dogs, but specific numeric values for these parameters are not present in the provided abstract. |
| PGx | Tanaka_1998 | not_relevant | 0 | 0 | The paper investigates developmental changes in liver enzyme activity and drug metabolism (ontogeny) in beagle dogs, not genetic polymorphisms or pharmacogenomic variants. |
| PGx | Tanaka_2000 | not_relevant | 0 | 0 | The text mentions trimethadione only as a CYP2E1 probe and explicitly states that evidence for functional polymorphism of CYP2E1 is lacking; no pharmacogenomic effect is reported. |
| PGx | Tanaka_2003 | not_relevant | 0 | 0 | The paper reports enzyme kinetics and contribution of CYP isoforms to metabolism in vitro, but does not report the effect of specific genetic variants (genotypes/phenotypes) on drug parameters in humans. |
| popPK | Vorhees_1983 | irrelevant | 0 | 0 | The paper reports on teratogenic dose-response and behavioral outcomes, not quantitative toxicokinetic parameters like half-lives, clearance, or partition coefficients. |
| popPK | Vorhees_1985 | irrelevant | 1 | 2 | The paper focuses on behavioral teratogenicity, and the only quantitative kinetic data provided are maternal plasma concentrations of Diphenylhydantoin (DPH), not trimethadione; no kinetic parameters for trimethadione are present. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrimethadione%5D&body=Drug%3A%20trimethadione%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_trimethadione/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 08:22 UTC</sub>
