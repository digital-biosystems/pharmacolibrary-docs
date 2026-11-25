<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;pentagastrin&quot;}]"></div>

# pentagastrin

- **generic name:** pentagastrin
- **ATC codes:** `V04CG04`
- **DrugBank:** [DB00183](https://go.drugbank.com/drugs/DB00183) · **PubChem:** [CID 9853654](https://pubchem.ncbi.nlm.nih.gov/compound/9853654)
- **molar mass:** 767.9 g/mol (C37H49N7O9S) — DrugBank
- **groups:** approved

## About

Pentagastrin is a synthetic polypeptide used as a diagnostic agent to test gastric secretion. It is administered via intravenous, intramuscular, or subcutaneous routes as a liquid solution. The drug is approved for medical use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423586](https://www.wikidata.org/wiki/Q423586), [Wikipedia](https://en.wikipedia.org/wiki/Pentagastrin?oldid=1329362820) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lotti_1986_acid_secretion](drugs/drug_pentagastrin/pd_Lotti_1986_acid_secretion.md) | acid secretion ← pentagastrin · stimulation effect | — | Lotti VJ et al., Evidence that cholecystokinin octapepti…, Digestion (1986) | [10.1159/000199363](https://doi.org/10.1159/000199363) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cabero_1989_intracellular_free_Ca2](drugs/drug_pentagastrin/pd_Cabero_1989_intracellular_free_Ca2.md) | intracellular free Ca2+ ← pentagastrin · direct Emax (saturable) effect | — | Cabero JL et al., The effects of various gastrins on intr…, Acta physiologica Scandinav… (1989) | [10.1111/j.1748-1716.1989.tb08670.x](https://doi.org/10.1111/j.1748-1716.1989.tb08670.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:41 | 0:04 | 0/0/0 | 1/1/0 | 0/0/0 | 3,683/179 | einfracz / qwen3.8-27b | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 255 matched, 65 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Andersson_2001.pdf` | Andersson T et al., Pharmacokinetics and pharmacodynamics o…, Alimentary pharmacology & t… (2001) | pd | 5 | [10.1046/j.1365-2036.2001.01087.x](https://doi.org/10.1046/j.1365-2036.2001.01087.x) | [11563995](https://www.ncbi.nlm.nih.gov/pubmed/11563995) | metadata signals extractable PD data (sigmoid) |
| `Ferron_2001.pdf` | Ferron GM et al., Pharmacodynamic modeling of pantoprazol…, Journal of clinical pharmac… (2001) | pd | 5 | [10.1177/00912700122009953](https://doi.org/10.1177/00912700122009953) | [11210394](https://www.ncbi.nlm.nih.gov/pubmed/11210394) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Gugler_1981.pdf` | Gugler R et al., Cimetidine plasma concentration-respons…, Clinical pharmacology and t… (1981) | pd | 5 | [10.1038/clpt.1981.105](https://doi.org/10.1038/clpt.1981.105) | [7226706](https://www.ncbi.nlm.nih.gov/pubmed/7226706) | metadata signals extractable PD data (sigmoid) |
| `Schwartz_1995.pdf` | Schwartz JI et al., Novel oral medication delivery system f…, Journal of clinical pharmac… (1995) | pd | 5 | [10.1002/j.1552-4604.1995.tb04074.x](https://doi.org/10.1002/j.1552-4604.1995.tb04074.x) | [7650224](https://www.ncbi.nlm.nih.gov/pubmed/7650224) | metadata signals extractable PD data (EC50) |
| `Botella_1992.pdf` | Botella A et al., Cholecystokinin and gastrin induce cell…, Gastroenterology (1992) | pd | 4 | [10.1016/0016-5085(92)90158-u](https://doi.org/10.1016/0016-5085(92)90158-u) | [1537515](https://www.ncbi.nlm.nih.gov/pubmed/1537515) | metadata signals extractable PD data (EC50) |
| `Cabero_1989.pdf` | Cabero JL et al., The effects of various gastrins on intr…, Acta physiologica Scandinav… (1989) | pd | 4 | [10.1111/j.1748-1716.1989.tb08670.x](https://doi.org/10.1111/j.1748-1716.1989.tb08670.x) | [2750535](https://www.ncbi.nlm.nih.gov/pubmed/2750535) | metadata signals extractable PD data (EC50) |
| `Chang_1985.pdf` | Chang RS et al., Cholecystokinin receptor mediated hydro…, Life sciences (1985) | pd | 4 | [10.1016/0024-3205(85)90392-3](https://doi.org/10.1016/0024-3205(85)90392-3) | [2983160](https://www.ncbi.nlm.nih.gov/pubmed/2983160) | metadata signals extractable PD data (EC50) |
| `Kwon_2001.pdf` | Kwon D et al., Effects of IY-81149, a newly developed…, Arzneimittel-Forschung (2001) | pd | 4 | [10.1055/s-0031-1300026](https://doi.org/10.1055/s-0031-1300026) | [11304936](https://www.ncbi.nlm.nih.gov/pubmed/11304936) | metadata signals extractable PD data (IC50) |
| `Lanas_1994.pdf` | Lanas AI et al., Effects of cholinergic, histaminergic,…, Scandinavian journal of gas… (1994) | pd | 4 | [10.3109/00365529409092493](https://doi.org/10.3109/00365529409092493) | [7973426](https://www.ncbi.nlm.nih.gov/pubmed/7973426) | metadata signals extractable PD data (EC50) |
| `Lotti_1986.pdf` | Lotti VJ et al., Evidence that cholecystokinin octapepti…, Digestion (1986) | pd | 4 | [10.1159/000199363](https://doi.org/10.1159/000199363) | [3781112](https://www.ncbi.nlm.nih.gov/pubmed/3781112) | metadata signals extractable PD data (EC50) |
| `Mårdh_1984.pdf` | Mårdh S et al., Preparation of cells from pig gastric m…, Acta physiologica Scandinav… (1984) | pd | 4 | [10.1111/j.1748-1716.1984.tb07550.x](https://doi.org/10.1111/j.1748-1716.1984.tb07550.x) | [6524398](https://www.ncbi.nlm.nih.gov/pubmed/6524398) | metadata signals extractable PD data (EC50) |
| `Mårdh_1985.pdf` | Mårdh S et al., A method for in vitro studies on acid f…, Acta physiologica Scandinav… (1985) | pd | 4 | [10.1111/j.1748-1716.1985.tb07599.x](https://doi.org/10.1111/j.1748-1716.1985.tb07599.x) | [2998159](https://www.ncbi.nlm.nih.gov/pubmed/2998159) | metadata signals extractable PD data (EC50) |
| `Mårdh_1987.pdf` | Mårdh S et al., Mechanisms of stimulation of acid produ…, Acta physiologica Scandinav… (1987) | pd | 4 | [10.1111/j.1748-1716.1987.tb08280.x](https://doi.org/10.1111/j.1748-1716.1987.tb08280.x) | [2831697](https://www.ncbi.nlm.nih.gov/pubmed/2831697) | metadata signals extractable PD data (EC50) |
| `Norberg_1986.pdf` | Norberg L et al., Stimulation of acid formation by histam…, Acta physiologica Scandinav… (1986) | pd | 4 | [10.1111/j.1748-1716.1986.tb07831.x](https://doi.org/10.1111/j.1748-1716.1986.tb07831.x) | [2421535](https://www.ncbi.nlm.nih.gov/pubmed/2421535) | metadata signals extractable PD data (EC50) |
| `Pagani_1985.pdf` | Pagani F et al., Pharmacology of mifentidine, a novel H2…, Arzneimittel-Forschung (1985) | pd | 4 |  | [2859036](https://www.ncbi.nlm.nih.gov/pubmed/2859036) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 02:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andersson_2001 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PGx | Andersson_2001 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and pharmacodynamics of esomeprazole, not pentagastrin. |
| popPK | Botella_1992 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of CCK/gastrin receptor subtypes in pig ileum smooth muscle, not a pharmacokinetic study reporting disposition parameters for pentagastrin. |
| PGx | Botella_1992 | not_relevant | 0 | 0 | The paper is a pharmacodynamics study of pentagastrin in pig ileum smooth muscle cells and does not involve genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Bradwejn_2001 | irrelevant | 0 | 0 | This is a review article discussing the role of CCK in panic disorder; it does not report original pharmacokinetic parameters for pentagastrin. |
| PGx | Bradwejn_2001 | not_relevant | 0 | 0 | The text is a review article discussing the role of CCK in panic disorder and mentions pentagastrin only as a general CCK-2 agonist example without reporting specific pharmacogenomic data or quantitative PK/PD parameter changes. |
| popPK | Cabero_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intracellular calcium changes in pig parietal cells, not a pharmacokinetic study of pentagastrin. |
| PGx | Cabero_1989 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of pentagastrin in pig parietal cells but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Cabero_1993 | irrelevant | 0 | 0 | The study investigates the mechanism of action (aminopyrine accumulation) in isolated cells, not pharmacokinetic disposition parameters. |
| PGx | Cabero_1993 | not_relevant | 0 | 0 | The study investigates the cellular mechanism of action (cAMP pathway) of pentagastrin in isolated pig parietal cells and does not report on any genetic variants or pharmacogenomic influences on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Callaghan_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nizatidine and cimetidine, with pentagastrin used only as a secretagogue/probe drug to induce acid secretion. |
| PGx | Callaghan_1985 | not_relevant | 0 | 0 | The paper reports PK/PD parameters for nizatidine using pentagastrin as an inducer, but does not report pharmacogenomic effects on pentagastrin itself. |
| popPK | Carles-Bonnet_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of N-acetyl oxyntomodulin derivatives, with pentagastrin used only as a secretagogue to stimulate acid secretion, not as the subject drug for PK parameter estimation. |
| PGx | Carles-Bonnet_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics and activity of a peptide analog (oxyntomodulin derivative) and does not report any genetic variants or genotypes influencing these parameters. |
| popPK | Chang_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of pentagastrin on inositol phospholipid hydrolysis in guinea pig gastric glands, not its pharmacokinetic parameters. |
| PGx | Chang_1985 | not_relevant | 0 | 0 | The paper describes in vitro pharmacology of inositol phospholipid hydrolysis mediated by CCK receptors and does not report on any pharmacogenomic variant's impact on the PK or PD of pentagastrin. |
| popPK | Chin_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ketoconazole, not pentagastrin. |
| PGx | Chin_1995 | not_relevant | 0 | 0 | The paper investigates the effect of gastric pH on ketoconazole absorption, not pharmacogenomic effects on pentagastrin. |
| popPK | Chremos_1987 | irrelevant | 0 | 0 | The paper is a summary of famotidine's pharmacology, where pentagastrin is only mentioned as a secretagogue used for gastric acid stimulation, not as the subject of PK analysis. |
| PGx | Chremos_1987 | not_relevant | 0 | 0 | The paper describes the clinical pharmacology of famotidine and mentions pentagastrin only as a stimulant for measuring acid secretion; it does not report pharmacogenomic effects on pentagastrin's PK or PD parameters. |
| popPK | Cundy_1998 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug PMPA in dogs, where pentagastrin was used only as a pretreatment agent, not as the subject drug. |
| PGx | Cundy_1998 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of PMPA in dogs; pentagastrin is used only as a pretreatment for gastric emptying, not as the drug of interest, and no pharmacogenomic effects are reported. |
| popPK | Elder_1975 | irrelevant | 0 | 0 | The study focuses on the physiological effects of urogastrone on gastric secretion using pentagastrin as a stimulant agent, and does not report pharmacokinetic parameters (CL, V, ka) for pentagastrin. |
| PGx | Elder_1975 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of urogastrone on pentagastrin-stimulated secretion and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Ferron_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of pantoprazole, using pentagastrin only as a diagnostic stimulant for gastric acid secretion rather than as the subject drug for PK modeling. |
| PGx | Ferron_2001 | not_relevant | 0 | 0 | The paper models the pharmacodynamics of pantoprazole (an irreversible proton pump inhibitor), not pentagastrin, and contains no pharmacogenomic (genotype/variant) information. |
| popPK | Freedman_1994 | irrelevant | 0 | 0 | Pentagastrin is used only as a pharmacological tool to assess receptor antagonist activity, not as the subject of a pharmacokinetic study. |
| PGx | Freedman_1994 | not_relevant | 0 | 0 | The paper describes a CCK-B receptor antagonist and its pharmacology, not a pharmacogenomic effect on pentagastrin PK/PD. |
| popPK | Freitas_2008 | irrelevant | 0 | 0 | Pentagastrin is used only as a secretagogue to test the effect of the plant extract, with no pharmacokinetic parameters measured. |
| PGx | Freitas_2008 | not_relevant | 0 | 0 | The paper studies the pharmacological mechanism of a plant extract on gastric secretion using pentagastrin as a stimulus, but does not report any pharmacogenomic effect (gene variant impact) on the PK or PD of pentagastrin. |
| popPK | Freston_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of lansoprazole, with pentagastrin used only as a diagnostic agent to stimulate acid output, not as the subject of PK modeling. |
| PGx | Freston_2004 | not_relevant | 0 | 0 | The study compares pharmacokinetics and pharmacodynamics of lansoprazole formulations and does not investigate the effect of gene variants on pentagastrin's PK or PD parameters. |
| popPK | Graham_1999 | irrelevant | 0 | 0 | Pentagastrin is used only as a comparator probe to lower gastric pH in a 13C-urea breath test, and no pharmacokinetic parameters for pentagastrin are reported. |
| PGx | Graham_1999 | not_relevant | 0 | 0 | The study investigates the mechanism of citric acid in a 13C-urea breath test and uses pentagastrin only as a control agent, containing no genetic variants or pharmacogenomic analysis. |
| popPK | Gugler_1981 | irrelevant | 0 | 0 | The study focuses on cimetidine pharmacodynamics (concentration-response) using pentagastrin as a stimulant, and does not report pharmacokinetic parameters for pentagastrin itself. |
| PGx | Gugler_1981 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of cimetidine using pentagastrin as a stimulant, and does not report pharmacogenomic effects on the PK/PD of pentagastrin itself. |
| popPK | Hall_1977 | irrelevant | 0 | 0 | The study is a physiological investigation of gastric acid secretion response to pentagastrin, not a pharmacokinetic study measuring disposition parameters (CL, V, etc.) for pentagastrin. |
| PGx | Hall_1977 | not_relevant | 0 | 1 | The study investigates the physiological effect of antrectomy on pentagastrin response in monkeys, not the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Helander_1979 | irrelevant | 0 | 0 | The study focuses on parietal cell morphology and acid secretion response to pentagastrin (pharmacodynamics), not on the pharmacokinetic disposition parameters (clearance, volume, half-life) of the drug itself. |
| PGx | Helander_1979 | not_relevant | 0 | 0 | The paper investigates the effects of vagal denervation (a physiological/anatomical change) on pentagastrin response in cats, not the effect of a genetic variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hollande_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on histamine release in rabbit cells using pentagastrin as a stimulant, not a pharmacokinetic study. |
| PGx | Hollande_1993 | not_relevant | 0 | 0 | The paper reports pharmacological effects of pentagastrin on histamine release in rabbit cells but does not investigate the influence of genetic variants (pharmacogenomics) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hollande_1994 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of histamine synthesis regulation using pentagastrin as a stimulant, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Hollande_1994 | not_relevant | 0 | 0 | The paper describes neurohormonal regulation of histamine synthesis in rabbit cells and does not report any genetic variants or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of pentagastrin. |
| popPK | Hussein_1993 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of lansoprazole, not pentagastrin. |
| PGx | Hussein_1993 | not_relevant | 0 | 0 | The paper studies lansoprazole, not pentagastrin, and investigates age rather than genetic variants. |
| popPK | Håkanson_1977 | irrelevant | 0 | 0 | The study investigates the pharmacological effect of pentagastrin on enzyme activity and dose-response curves in rats, but does not report pharmacokinetic parameters (clearance, volume, half-life) for pentagastrin. |
| PGx | Håkanson_1977 | not_relevant | 0 | 0 | The study investigates physiological feedback mechanisms involving histamine and pentagastrin in rats and does not report any genetic variants or pharmacogenomic effects. |
| popPK | Jaworek_1992 | irrelevant | 0 | 0 | The study focuses on bombesin receptor antagonists and pancreatic secretion, where pentagastrin is only used as a control agent to show that the antagonists do not affect its response. |
| PGx | Jaworek_1992 | not_relevant | 0 | 0 | The paper describes the effects of bombesin receptor antagonists on pancreatic secretion, not the pharmacogenomic effects of gene variants on the PK or PD of pentagastrin. |
| popPK | Kachur_1991 | irrelevant | 0 | 0 | This is an in vitro pharmacological study characterizing CCK receptor subtypes, not a pharmacokinetic study, and pentagastrin is used only as a weak agonist comparator. |
| PGx | Kachur_1991 | not_relevant | 0 | 0 | The paper characterizes CCK receptor subtypes in guinea pig ileum and does not report any pharmacogenomic effect of gene variants on the PK/PD of pentagastrin. |
| popPK | Kesisoglou_2015 | irrelevant | 0 | 0 | The paper concerns PBPK modeling for undisclosed Merck compounds and pioglitazone, with no mention or data for pentagastrin. |
| PGx | Kesisoglou_2015 | not_relevant | 0 | 0 | The paper discusses absorption modeling for other drugs (losartan, pioglitazone) and does not mention pentagastrin or any pharmacogenomic effects. |
| popPK | Kwon_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of IY-81149 (a proton pump inhibitor), using pentagastrin only as a stimulant for gastric acid secretion rather than as the subject of a pharmacokinetic analysis. |
| PGx | Kwon_2001 | not_relevant | 0 | 0 | The paper reports preclinical pharmacodynamic data for a proton pump inhibitor but contains no pharmacogenomic analysis or reference to genetic variants. |
| popPK | Lanas_1994 | irrelevant | 0 | 0 | This is an in vitro cell biology study measuring pepsinogen secretion where pentagastrin acts as a negative control (no effect), containing no pharmacokinetic parameters. |
| PGx | Lanas_1994 | not_relevant | 0 | 0 | The study examines basal and stimulated pepsinogen secretion by isolated cells and does not investigate pharmacokinetic or pharmacodynamic parameters of pentagastrin in the context of gene variants. |
| popPK | Lavezzo_1986 | irrelevant | 0 | 0 | The study investigates a gastrin antagonist, using pentagastrin only as a secretagogue/challenge agent, and does not report pharmacokinetic parameters for pentagastrin. |
| PGx | Lavezzo_1986 | not_relevant | 0 | 1 | The paper describes the pharmacological profile of a gastrin antagonist, but reports no effect of gene variants or genotypes on the PK or PD parameters of pentagastrin. |
| popPK | Lotti_1986 | irrelevant | 0 | 0 | The study is a mechanistic receptor/pharmacodynamic experiment measuring acid secretion potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume for pentagastrin. |
| PGx | Lotti_1986 | not_relevant | 0 | 0 | The paper investigates the agonist potency of CCK-8 vs pentagastrin in mouse stomachs but does not report any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Lundell_1975 | irrelevant | 0 | 0 | The study is a physiological investigation of gastric acid secretion using pentagastrin as a secretagogue in rats, and does not report pharmacokinetic parameters (CL, V, t1/2) for pentagastrin. |
| PGx | Lundell_1975 | not_relevant | 0 | 0 | The paper reports the effects of a surgical procedure (antrectomy) on pentagastrin-induced gastric acid secretion, not the effect of a gene variant or genotype. |
| popPK | Magee_1988 | irrelevant | 0 | 0 | The study focuses on the relationship between pentagastrin dose and gastric secretion (physiology/secretion study), not the pharmacokinetic disposition parameters (CL, V, etc.) of pentagastrin itself. |
| PGx | Magee_1988 | not_relevant | 0 | 0 | The study investigates the relationship between plasma gastrin and gastric secretion in response to pentagastrin in dogs, with no mention of gene variants or genotypes affecting these pharmacokinetic or pharmacodynamic parameters. |
| popPK | Morini_1990 | irrelevant | 0 | 0 | This is an in vitro receptor pharmacology study of the CCK/gastrin receptor on guinea pig intestinal muscle, not a pharmacokinetic study of pentagastrin. |
| PGx | Morini_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of the CCK/gastrin receptor in guinea pig muscle cells using pentagastrin as a tool, but does not report any genetic variants or pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Morton_2002 | irrelevant | 0 | 0 | The study is a pharmacological bioassay characterizing receptor subtypes in human tissue using pentagastrin as an agonist, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Morton_2002 | not_relevant | 0 | 0 | The paper reports pharmacological receptor characterization in ex-vivo human tissue but does not study the effect of any gene variant or genotype on pentagastrin's pharmacokinetics or pharmacodynamics. |
| popPK | Morton_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of JNJ-26070109, where pentagastrin is only used as a tool compound to stimulate acid secretion, not as the subject drug for PK analysis. |
| PGx | Morton_2011 | not_relevant | 0 | 0 | The paper describes the pharmacology of a CCK2 antagonist and does not report any association between genetic variants and PK/PD parameters. |
| popPK | Mårdh_1984 | irrelevant | 0 | 0 | The study describes in vitro cell culture isolation and functional response to pentagastrin, not pharmacokinetic disposition parameters. |
| PGx | Mårdh_1984 | not_relevant | 0 | 0 | The paper describes cell isolation methods and general secretagogue responses in pigs, but does not report any gene variant, genotype, or pharmacogenomic effect on pentagastrin PK/PD parameters. |
| popPK | Mårdh_1985 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of acid secretion in parietal cells using pentagastrin as a stimulant, not a pharmacokinetic study of drug disposition. |
| PGx | Mårdh_1985 | not_relevant | 0 | 0 | The paper describes in vitro acid secretion by parietal cells stimulated by pentagastrin but does not investigate any genetic variants or genotypes. |
| popPK | Mårdh_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of acid secretion in isolated pig parietal cells, not a pharmacokinetic study of pentagastrin disposition. |
| PGx | Mårdh_1987 | not_relevant | 0 | 0 | The paper investigates cellular mechanisms of acid secretion in pigs and does not report any pharmacogenomic effects (gene variants) on the PK or PD of pentagastrin. |
| popPK | Mårdh_1988 | irrelevant | 0 | 0 | Pentagastrin is used as an in-vitro stimulant for acid secretion in pig parietal cells, not as the subject drug for pharmacokinetic analysis. |
| PGx | Mårdh_1988 | not_relevant | 0 | 0 | The paper tests the pharmacological effects of various drugs on pig parietal cells and does not report any pharmacogenomic effects of gene variants on the PK/PD parameters of pentagastrin. |
| popPK | Norberg_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of acid secretion in pig parietal cells, not a pharmacokinetic study of pentagastrin disposition. |
| PGx | Norberg_1986 | not_relevant | 0 | 0 | The paper reports physiological pharmacodynamics of pentagastrin in pig parietal cells without investigating any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Olbe_1989 | irrelevant | 0 | 0 | Pentagastrin is used only as a standard pharmacologic challenge to measure acid secretion, not as the subject of pharmacokinetic analysis. |
| PGx | Olbe_1989 | not_relevant | 0 | 0 | The paper reports the pharmacodynamic effects of omeprazole on acid secretion and gastrin levels, but it does not report any pharmacogenomic effects (gene variants) on the PK/PD of pentagastrin. |
| popPK | Orjioke_1986 | irrelevant | 1 | 0 | The study is a dose-response pharmacodynamic assessment of gastric acid secretion, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Orjioke_1986 | not_relevant | 0 | 0 | The study compares gastric acid secretion between control and duodenal ulcer patients but does not report gene variants or genotypes. |
| popPK | Pagani_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacology of mifentidine, using pentagastrin only as a secretagogue for comparison, without reporting pentagastrin's own pharmacokinetic parameters. |
| PGx | Pagani_1985 | not_relevant | 0 | 0 | The paper describes the pharmacology of mifentidine and its interaction with pentagastrin in animal models, but it contains no information regarding gene variants, genotypes, or phenotypes (pharmacogenomics). |
| popPK | Patel_1992 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology comparison using pentagastrin as a tool compound, not a pharmacokinetic study. |
| PGx | Patel_1992 | not_relevant | 0 | 0 | The paper describes receptor pharmacology in animal tissue models and does not report any human pharmacogenomic effect of gene variants on the PK or PD of pentagastrin. |
| popPK | Rossowski_1998 | irrelevant | 0 | 0 | The study uses pentagastrin as a stimulant for gastric acid secretion in rats to evaluate the mechanism of a somatostatin antagonist, not as a subject drug for pharmacokinetic parameter estimation. |
| PGx | Rossowski_1998 | not_relevant | 0 | 0 | The paper studies the physiological mechanism of gastric acid secretion and somatostatin receptor antagonism in rats, involving no human gene variants, genotypes, or pharmacogenomic analysis. |
| popPK | Satoh_1995 | irrelevant | 0 | 0 | The provided evidence is a software log or empty extraction result containing no scientific content, pharmacokinetic data, or mention of pentagastrin. |
| PGx | Satoh_1995 | not_relevant | 0 | 0 | The text is a software configuration log for GROBID and contains no scientific data regarding pharmacogenomics or pentagastrin. |
| popPK | Scemama_1989 | irrelevant | 0 | 0 | The study is an in vitro mechanistic pharmacology study measuring receptor binding and enzyme activity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Scemama_1989 | not_relevant | 0 | 0 | The paper discusses the pharmacodynamics of pentagastrin in a rat cell line but does not report a pharmacogenomic effect (gene variant/genotype) on PK/PD parameters. |
| popPK | Schepp_1986 | irrelevant | 0 | 0 | The study is an in-vitro investigation of gastric parietal cell function using aminopyrine uptake, where pentagastrin is used only as a secretagogue stimulant, not for PK parameter determination. |
| PGx | Schepp_1986 | not_relevant | 0 | 0 | The paper examines the effects of various compounds on H+ production in isolated parietal cells and does not report any pharmacogenomic effects of gene variants on pharmacokinetic or pharmacodynamic parameters of pentagastrin. |
| popPK | Schuurkes_1979 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of pentagastrin on gastric motility (contractile activity) and does not report any pharmacokinetic parameters (CL, V, etc.). |
| PGx | Schuurkes_1979 | not_relevant | 0 | 0 | The paper describes the pharmacological effects of pentagastrin on canine gastric motility but does not report any genetic variations or pharmacogenomic effects. |
| popPK | Schwartz_1995 | irrelevant | 0 | 0 | Pentagastrin is used solely as a pharmacological probe to stimulate acid secretion to evaluate famotidine, not as the subject drug for PK parameter estimation. |
| PGx | Schwartz_1995 | not_relevant | 0 | 0 | The paper describes the pharmacokinetics of famotidine formulations using pentagastrin as a stimulant for PD assessment, but it does not report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Shah_2025 | irrelevant | 0 | 0 | The paper is a comprehensive review on machine learning for predicting food effects on drug bioavailability and does not contain any original pharmacokinetic data or quantitative disposition parameters for pentagastrin. |
| PGx | Shah_2025 | not_relevant | 0 | 0 | The paper is a review on machine learning for food effects and mentions pentagastrin only as a tool for pH control in animal models, without reporting any pharmacogenomic effects on its PK or PD. |
| popPK | Sharma_1998 | irrelevant | 0 | 0 | The paper is a review of indirect pharmacodynamic models and does not report quantitative pharmacokinetic parameters for pentagastrin. |
| PGx | Sharma_1998 | not_relevant | 0 | 0 | The paper is a general review of indirect pharmacodynamic models and does not report on pharmacogenomic effects on pentagastrin. |
| popPK | Skok_1991 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of ganglionic blocking agents on gastric secretion, not the pharmacokinetics of pentagastrin, which is used only as an agonist/challenge agent. |
| PGx | Skok_1991 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of ganglionic blockers on pentagastrin-induced secretion in animals and does not involve human genetic variants or pharmacogenomics. |
| popPK | Smeets_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling (Ca2+ mobilization and cAMP accumulation) and does not report pharmacokinetic parameters for pentagastrin. |
| PGx | Smeets_1998 | not_relevant | 0 | 10 | The paper does not investigate gene variants or genotypes; instead, it studies the receptor signaling pathways (PKC-mediated inhibition) of CCK(A) and CCK(B) receptors using stable cell line expression. |
| popPK | Stephens_1989 | irrelevant | 0 | 0 | The study focuses on gastric physiology and serotonin effects, using pentagastrin only as a comparator stimulus, and does not report any pharmacokinetic parameters for pentagastrin. |
| PGx | Stephens_1989 | not_relevant | 0 | 0 | The paper investigates the effect of serotonin depletion (via p-CPA or 5,7-dihydroxytryptamine) on drug responses, which is a pharmacological intervention, not a pharmacogenomic variant/genotype study. |
| popPK | Tachibana_1996 | irrelevant | 0 | 0 | Pentagastrin is used only as a control ligand to demonstrate the specificity of the CCK antagonist TP-680; no PK parameters for pentagastrin are reported. |
| PGx | Tachibana_1996 | not_relevant | 0 | 0 | The paper describes the pharmacological profile of a new CCK antagonist and its effects on pancreatic/biliary function in animals, containing no information on genetic variants or pharmacogenomics. |
| popPK | Takahashi_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of tegoprazan, using pentagastrin only as a positive control for acid secretion induction. |
| PGx | Takahashi_2018 | not_relevant | 0 | 0 | The paper reports preclinical pharmacology of tegoprazan (PK/PD in dogs/in vitro) and its effect on pentagastrin-induced acid secretion, but does not investigate any gene variant, genotype, or pharmacogenomic influence on these parameters. |
| popPK | Weng_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacological profile (agonist/antagonist activity) of CCK-B receptor ligands, using pentagastrin only as a stimulant for gastric acid secretion assays, not for characterizing pentagastrin's own pharmacokinetics. |
| PGx | Weng_1996 | not_relevant | 0 | 0 | The paper investigates chemical structure-activity relationships of CCK-B receptor derivatives and does not report on genetic variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Wurst_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of BY841, while pentagastrin is used only as a stimulation agent in a dog model, so no PK parameters for pentagastrin are reported. |
| PGx | Wurst_1996 | not_relevant | 0 | 0 | The paper describes the pharmacology of BY841 (an acid pump antagonist) in animal and human models, and pentagastrin is only used as a stimulant in a specific experimental setting; it does not investigate pharmacokinetics or pharmacodynamics of pentagastrin itself, nor does it report pharmacogenomic effects. |
| popPK | Yuki_1997 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamics of an antagonist (YM022) and uses pentagastrin as a secretagogue, without reporting any pharmacokinetic parameters for pentagastrin itself. |
| PGx | Yuki_1997 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic effects of YM022 on gastric acid secretion in dogs and does not report any gene variants or pharmacogenomic influences on pentagastrin or YM022. |
| popPK | Zhu_2019 | irrelevant | 0 | 0 | The paper is about palbociclib bioequivalence simulations; pentagastrin is only mentioned as a gastric acid stimulant in dog studies, with no PK parameters for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentagastrin%5D&body=Drug%3A%20pentagastrin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pentagastrin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
